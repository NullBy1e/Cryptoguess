package controllers

import (
	"cryptoguess/configs"
	"cryptoguess/responses"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator"
)

var validate = validator.New()

func RootVersion() gin.HandlerFunc {
	return func(c *gin.Context) {
		//* Returns API Version and the name associated with it.
		c.JSON(http.StatusOK,
			responses.VersionResponse{Version: configs.API_Version, Version_name: configs.API_Version_name},
		)
	}
}

func RootUploadResult() gin.HandlerFunc {
	return func(c *gin.Context) {
		//TODO: Process the Result with the validator and parse them.
		c.JSON(http.StatusServiceUnavailable, nil)
	}
}
