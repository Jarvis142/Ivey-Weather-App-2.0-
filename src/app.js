function formatDate(timestamp) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(timestamp);
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes}`;
}

function formatDay(timestamp) {
  let date= new Date(timestamp * 1000)
  let day= date.getDay()
let days=[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
return days[day];
}
function displayForecast(response) {
 console.log(response.data);
 let forecast= response.data.daily;
  let forecastElement = document.querySelector("#forecast");

 

  let forecastHTML = `<div>`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6){
      let maxFah= Math.round(forecastDay.temperature.maximum);
    forecastHTML =
      forecastHTML +
      `
    <div class="week">

<div class="card">
         <div class="card-body">
           <div class="row">
             <div class="col-3"> 
             <img src= "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecastDay.condition.icon}.png" height="45" class="imgIcon" id="icon" />
</div>
           <div class="col-5 weather-forecast-date">${formatDay(forecastDay.time)}</div>

             <div class="col-2 farenheight"> ${Math.round(forecastDay.temperature.maximum )}
               °F
             </div>
             <div class="col-2 celcius">${Math.round(forecastDay.temperature.minimum)}
               °F
             </div>
           </div>
         </div>
         </div>
         </div>
`;
 } });
 
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}


function displayTemperature(response) {
    event.preventDefault();
    let cityName = document.querySelector("#cityDisplay");
    let temperatureElement = document.querySelector("#temperature");
    let currentConditions = document.querySelector("#conditions");
    let weatherIcon = document.querySelector("#icon");
    
    fahrenheitTemperature = Math.round(response.data.temperature.current );
    
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
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    feelsLike.innerHTML = Math.round(response.data.temperature.feels_like);
    humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
    windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.time * 1000);
    

getForecast(response.data.coordinates);}
function getForecast(coordinates){
let apiKey= "5cdf0fabb9e3fo934af85f67fb2t19a3"; //for some reason when I add {apiKey} to my url it returns an "Invalid" response
let city= "";
let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=imperial`;
axios.get(apiUrl).then(displayForecast);
}
function search(city){
    let apiKey= "5cdf0fabb9e3fo934af85f67fb2t19a3"; //for some reason when I add {apiKey} to my url it returns an "Invalid" response
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=imperial`;
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
        let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=imperial`;
        axios.get(apiUrl).then(displayTemperature);
      }
      function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
      }
      
      let myLocationButton = document.querySelector("#my-location");
      myLocationButton.addEventListener("click", getCurrentLocation);

     
      
      
  
      
     

 