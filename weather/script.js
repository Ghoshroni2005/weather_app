const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

async function getWeather(){

let city = document.getElementById("city").value;

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

if(data.cod=="404"){
document.getElementById("weather").innerHTML="City Not Found";
return;
}

document.getElementById("weather").innerHTML=`
<h2>${data.name}</h2>
<p>🌡 Temperature: ${data.main.temp} °C</p>
<p>☁ Weather: ${data.weather[0].main}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>🌬 Wind: ${data.wind.speed} m/s</p>
`;

}