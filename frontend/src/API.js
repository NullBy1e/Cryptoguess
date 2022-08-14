const URL = "http://localhost:8000/resources/coins_today";

export async function getTodaysCoins() {
	const response = await fetch(URL)
	var data = await response.json()
	return data
}