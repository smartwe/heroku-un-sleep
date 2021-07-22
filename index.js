var http = require("http");
setInterval(function() {
    console.log("every 10 minutes (600000)");
    http.get("http://discord-codingbot.herokuapp.com");
}, 600000); // every 10 minutes (600000)
