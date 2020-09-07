const api = require("binance");

const binanceWS = new api.BinanceWS(true); // Argument specifies whether the responses should be beautified, defaults to true

binanceWS.onKline("BTCUSDT", "1m", (data) => {
  console.log(data);
  document.getElementById("test1").innerText +=
    "به ملیون تومان  :" + data.kline.close * 0.024 + "\n";
});
