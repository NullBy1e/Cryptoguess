<script>
	import {getTodaysCoins} from "./API"
	var coins = getTodaysCoins();
	import { onMount } from 'svelte';
	onMount(()=>{
		coins.forEach(coin => {
		var div = document.createElement("div")
		var name = document.createElement("h3")
		var priceName = document.createElement("p")
		var price = document.createElement("p")
		var button = document.createElement("button")
		name.innerHTML = coin.name
		priceName.innerHTML = "Price:"
		price.innerHTML = coin.price
		if (coin.action == "buy"){
			button.innerText = "buy"
			button.addEventListener('click',function(){
				console.log("buy")
			})
		}else {
			button.innerHTML = "sale"
			button.addEventListener('click',function(){
				console.log("sell")
			})
		}
		div.style.marginLeft = "20px";
		div.style.width = "150px";
		div.style.textAlign = "center";
		div.style.borderStyle= "solid";
		div.style.borderWidth = "1px";
		div.style.borderColor = "grey";
		div.style.borderRadius = "10%";
		div.appendChild(name)
		div.appendChild(priceName)
		div.appendChild(price)
		div.appendChild(button)
		document.getElementById("choices").appendChild(div)
		console.log(coin)
	});
	})
</script>

<main>
	<div id="root">
		<h1>CryptoGuess</h1>
		<p>Guess todays crypto!</p>
		<div id="choices">
		</div>
	</div>
</main>

<style>
	#root{
		width: 100%;
		height: 100%;
		display: inline-block;
		justify-content: center;
		text-align: center;
	}
	#choices {
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
</style>
