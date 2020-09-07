const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "ZoOcm5EPiASFtaGHcAq9HxB4p6vB1WdsZ7O7DQUP65jHGwEPjA2U7pIvQuj8AcF0",
  APISECRET: "73LOExdmElqqRXI4mByzEV3FVrr9N05K8jSR04k1GP5q9zQEhnFbNqnklgePNqhL",
});

binance.websockets.bookTickers("BTCUSDT", console.log);
