package main

import (
	"cryptoguess/configs"
	"cryptoguess/routes"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/memstore"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	store := memstore.NewStore([]byte(configs.EnvCookieSecret()))
	router.Use(sessions.Sessions("cryptoguess", store))
	routes.RootRoute(router)
	routes.ResourcesRoute(router)
	routes.AuthRoute(router)
	router.Run(":8000")
}
