
const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&lang=fr&q=" ;
async  function getWeatherData(city)  {
    try {
        const url =BASE_URL+city;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Température :", data.main.temp);
        console.log("Humidité :", data.main.humidity);
        console.log("Description :", data.weather[0].description);
      } catch (error) {
        console.error(error.message);
      }
}

getWeatherData("sousse");