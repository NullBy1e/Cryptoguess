// const URL = "http://localhost:50";

export function getTodaysCoins() {
	// console.log(fetch(URL));
	return [
		{
			name: "BTC",
			price: "23000",
			action: "buy",
		},
		{
			name: "ETH",
			price: "1700",
			action: "sell",
		},
		{
			name: "MATIC",
			price: "0.9",
			action: "buy",
		},
		{
			name: "XMR",
			price: "130",
			action: "sell",
		},
	];
}