package main

import (
	"cryptoguess/configs"
	"cryptoguess/routes"
	"cryptoguess/scripts"
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/memstore"
	"github.com/gin-gonic/gin"
	"github.com/go-co-op/gocron"
)

func main() {
	scripts.UpdateToday()
	//* Scheduled tasks
	scheduler := gocron.NewScheduler(time.Local)
	scheduler.Every(1).Hour().Do(func() { scripts.UpdateCoinPrices() })
	scheduler.Every(1).Day().At("23:55").Do(func() { scripts.UpdateToday() })
	scheduler.StartAsync()

	router := gin.Default()
	store := memstore.NewStore([]byte(configs.EnvCookieSecret()))
	router.Use(sessions.Sessions("cryptoguess", store))
	routes.RootRoute(router)
	routes.ResourcesRoute(router)
	routes.AuthRoute(router)
	router.Run(":8000")
}
