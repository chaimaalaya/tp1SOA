const request = require("request");

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&lang=fr&q=" ;

function getWeatherData(city, callback) {
const url = BASE_URL + city;
request(url, function (error, response, body) {
if (error) {
callback(error, null);
} else {
const weatherData = JSON.parse(body);
callback(null, weatherData);
}
});
}
getWeatherData("Sousse",(error,data)=>{
    if (error) {
        console.error(error);
        } else {
            console.log("temp",data.main.temp);
            console.log("hum",data.main.humidity);
            console.log("des",data.weather[0].description);
            
            /* console.log(data.main);
            console.log(data);
            console.log(data.main.humidity); */
        }
})