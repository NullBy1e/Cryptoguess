package controllers

import (
	"cryptoguess/configs"
	"cryptoguess/responses"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ResourceGetCoinsToday() gin.HandlerFunc {
	return func(c *gin.Context) {
		//* Return the daily coins for the app
		coins := configs.CurrentCoins
		var coins_list []responses.DailyCoinResponse
		for i := range coins {
			coin_name := coins[i].Name
			coin_price := coins[i].CurrentPrice
			coins_list = append(coins_list, responses.DailyCoinResponse{Name: coin_name, Price: coin_price})
		}

		c.JSON(http.StatusOK, coins_list)
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
