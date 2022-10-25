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
}
let apiKey= "5cdf0fabb9e3fo934af85f67fb2t19a3"; //for some reason when I add {apiKey} to my url it returns an "Invalid" response
let city= "Seattle";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=5cdf0fabb9e3fo934af85f67fb2t19a3&units=metric`;
axios.get(apiUrl).then(displayTemperature);

