package scripts

import (
	"cryptoguess/configs"
	"log"
	"math/rand"
	"time"
)

func UpdateToday() {
	currentTime := time.Now()
	configs.Today = currentTime

	generateTodaysCoins()
	log.Println("Coins Generated for today: ", configs.CurrentCoins)
}

func generateTodaysCoins() {

	market_coins, err := configs.GetMarketCoins()

	if err != nil {
		log.Println("Could not get the market coins")
	}

	rand.Seed(time.Now().UnixNano())
	var todays_coins []configs.Coin

	for i := 0; i < 4; i++ {
		number := rand.Intn(100)
		todays_coins = append(todays_coins, market_coins[number])
	}

	configs.CurrentCoins = todays_coins
}

func UpdateCoinPrices() {
	//* A simple update script for updating prices
	updatedCoins, err := configs.GetSpecificCoins(configs.CurrentCoins)

	if err != nil {
		log.Println("Could not get the price of market coins")
	}
	configs.CurrentCoins = updatedCoins
}