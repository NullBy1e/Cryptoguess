import React from "react";
import { useEffect } from "react";

const useScript = (url) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = url;
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

const Chart = (props) => {
	/*
    Usage:
      :props.autosize: bool
      :props.symbol: ticker of the asset ex.: "KRAKEN:BITCOIN" or "NASDAQ:TSLA"
      :props.interval: interval in minutes

  */
	useScript("https://s3.tradingview.com/tv.js");

	const chartScript = document.createElement("script");
	chartScript.type = "text/javascript";
	chartScript.innerHTML = `
    new TradingView.widget(
      {
        "autosize": true,
        "symbol": ${props.symbol},
        "interval": "60",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
      }
    );`;

	return { chartScript };
};

export default Chart;
