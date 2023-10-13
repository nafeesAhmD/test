const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('.search-btn')
const weatherImg = document.querySelector('.weather-img')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#wind-speed')


async function checkWeather(city){
    const api_key = "454dbdcc9a5ca6779d2c5c6e9b18978f"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherData = await fetch(`${url}`)
    .then((respons) => respons.json())

    console.log(weatherData)
    
    temp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`
    description.innerHTML = `${weatherData.weather[0].description}`
    humidity.innerHTML = `${weatherData.main.humidity}%`
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/H`
    
}

searchBtn.addEventListener('click',function(){
    checkWeather(inputBox.value)
})