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


function displayTemperature(response){
    console.log(response.data);
    event.preventDefault();
    let cityName=document.querySelector("#cityDisplay");
    cityName.innerHTML=response.data.city;
    let temperatureElement= document.querySelector("#temperature");
    temperatureElement.innerHTML= Math.round(response.data.temperature.current);
    let currentConditions=document.querySelector("#conditions");
    currentConditions.innerHTML= response.data.condition.description;
    let weatherIcon=document.querySelector("#icon");
    weatherIcon.innerHTML= response.data.condition.icon_url;
    let feelsLike= document.querySelector("#feelsLike");
    feelsLike.innerHTML= Math.round(response.data.temperature.feels_like);
    let humidityElement= document.querySelector("#humidity");
    humidityElement.innerHTML= Math.round(response.data.temperature.humidity);
    let windSpeedElement=document.querySelector("#windSpeed");
    windSpeedElement.innerHTML=Math.round(response.data.wind.speed);
    let dateElement= document.querySelector("#date");
    dateElement.innerHTML= formatDate(response.data.time * 1000)
    let weatherIcon=document.querySelector("#icon");
    weatherIcon.setAttribute( "src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`) ;
        weatherIcon.setAttribute( "alt",response.data.description) ;
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
