package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ResourceGetCoinsToday() gin.HandlerFunc {
	return func(c *gin.Context) {
		//* Return the daily coins
		//TODO: Generate the daily coins
		c.JSON(http.StatusServiceUnavailable, nil)
	}
}

func ResourceGetArchiveFile() gin.HandlerFunc {
	return func(c *gin.Context) {
		//* Returns the archival file
		//! ( For now only to admins !)
		//TODO: Do it.
		c.JSON(http.StatusServiceUnavailable, nil)
	}
}
