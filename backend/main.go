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
	//* Scheduled tasks
	scheduler := gocron.NewScheduler(time.Local)
	scheduler.Every(15).Minutes().Do(func() { scripts.UpdateCoinPrices() })
	scheduler.Every(1).Day().At("00:00").Do(func() { scripts.UpdateToday() })
	scheduler.StartAsync()

	//* Redis
	configs.ConnectRedis()

	//* Archive configuration
	configs.SetupArchive()
	scripts.UpdateToday()

	//* Configure Gin
	router := gin.Default()
	store := memstore.NewStore([]byte(configs.EnvCookieSecret()))
	router.Use(sessions.Sessions("cryptoguess", store))
	routes.RootRoute(router)
	routes.ResourcesRoute(router)
	routes.AuthRoute(router)
	router.Run(":8000")
}
