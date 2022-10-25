function formatDate(timestamp){
    let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
    let date= new Date(timestamp);
    let hour= date.getHours();
    let minutes = date.getMinutes();
    let day= days[date.getDay()];
       if (hour < 10) {
  hour = `0${hour}`};
  if (minutes < 10) {
  minutes = `0${minutes}`}
    return `${day} ${hour}:${minutes}`
}


function displayTemperature(response) {
    event.preventDefault();
    let cityName = document.querySelector("#cityDisplay");
    let temperatureElement = document.querySelector("#temperature");
    let currentConditions = document.querySelector("#conditions");
    let weatherIcon = document.querySelector("#icon");
    
    celsiusTemperature = Math.round(response.data.temperature.current);
    
    let feelsLike = document.querySelector("#feelsLike");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#windSpeed");
    let dateElement = document.querySelector("#date");
  
    cityName.innerHTML = response.data.city;
    currentConditions.innerHTML = response.data.condition.description;
    weatherIcon.setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
    weatherIcon.setAttribute("alt", response.data.description);
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    feelsLike.innerHTML = Math.round(response.data.temperature.feels_like);
    humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
    windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.time * 1000);
    }


let apiKey= "5cdf0fabb9e3fo934af85f67fb2t19a3"; //for some reason when I add {apiKey} to my url it returns an "Invalid" response
let city= "Seattle";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=metric`;
axios.get(apiUrl).then(displayTemperature);

function search(city){
    let apiKey= "5cdf0fabb9e3fo934af85f67fb2t19a3"; //for some reason when I add {apiKey} to my url it returns an "Invalid" response
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    }
    function handleSubmit(event){
        event.preventDefault();
        let citySearch= document.querySelector("#city-search");
        search(citySearch.value);
    }
    search("Washington D.C.");
    
    let form=document.querySelector("#search-form");
    form.addEventListener("submit", handleSubmit);
   
    function searchLocation(position) {
        let apiKey = "5cdf0fabb9e3fo934af85f67fb2t19a3";
        console.log(position.coords.latitude);
        let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=metric`;
        axios.get(apiUrl).then(displayTemperature);
      }
      function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
      }
      
      let myLocationButton = document.querySelector("#my-location");
      myLocationButton.addEventListener("click", getCurrentLocation);

      function convertToFahrenheit(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
      }
      
      function convertToCelsius(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = celsiusTemperature;
      }
      let celsiusTemperature = null;
      
      let fahrenheitLink = document.querySelector("#fahrenheit-link");
      fahrenheitLink.addEventListener("click", convertToFahrenheit);
      
      let celsiusLink = document.querySelector("#celsius-link");;
      celsiusLink.addEventListener("click", convertToCelsius);

