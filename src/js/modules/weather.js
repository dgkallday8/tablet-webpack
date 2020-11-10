import {backBtn, display} from './switching'

const weather = () => {
    backBtn.style.display = 'block'
    return `
        <div class="weather" id="weather">
            <form action="#" name="weatherCity">
                <label for="city">Введите город </label>
                <input type="text" name="city" id="city">
                <input type="submit" value="Узнать погоду">
            </form>
            <div id="resultWeather" class="resultWeather"></div>
        </div>
    `
}
function getCity() {
    let dataWeather = document.forms.weatherCity
    // console.log(dataWeather)
    dataWeather.addEventListener('submit', event => {
        event.preventDefault()
        let current = dataWeather.city.value
        // console.log(current)
        ajaxWeather(current.trim())
        dataWeather.city.value = ''
    })
}

function ajaxWeather(city) {
    const apiKey = 'a62e19be51e2d4a10ac473cf6ef0b1d3'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const requestWeather = new XMLHttpRequest()
    requestWeather.open('GET', apiUrl, true)
    requestWeather.onload = function () {
        if (requestWeather.status === 200) {
            const file = JSON.parse(requestWeather.responseText)
            console.log(file)
            display.innerHTML = `
                <div class="temperature">
                    <div class="block">
                        <h3>${file.name} (${file.sys.country})</h3>
                        <div class="weather_img"><img src="https://openweathermap.org/img/wn/${file.weather[0].icon}.png"" alt="weather"></div>
                        <div class="weather_block">
                            <p>Температура, <sup>o</sup>C:</p>
                            <p>${Math.round(file.main.temp)}</p>
                        </div>
                        <div class="weather_block">
                            <p>Ощущается как, <sup>o</sup>C:</p>
                            <p>${Math.round(file.main.feels_like)}</p>
                        </div>
                        <div class="weather_block">
                            <p>Направление ветра:</p> 
                            <p>${windDir(file.wind.deg)}</p>
                        </div>
                        <div class="weather_block">
                            <p>Скорость ветра, м/с:</p>
                            <p>${file.wind.speed}</p>
                        </div>
                        <div class="weather_block">
                            <p>Влажность, %:</p>
                            <p>${file.main.humidity}</p>
                        </div>
                    </div>
                </div>
            `
        } else {
            console.log('нет такого')
            display.innerHTML = `
                
                <div class="weatherEr">
                    <h3>Не найдено такого</h3>
                    <p>Попробуйте еще раз</p>
                </div>
            `
        }
    }
    requestWeather.send()
}
function windDir(numVal) {
    if(numVal <= 22.5)
        return "Северное";
    else if(numVal <= 67.5)
        return "Северо-Восточное";
    else if(numVal <= 112.5)
        return "Востоное";
    else if(numVal <= 157.5)
        return "Юго-Восточное";
    else if(numVal <= 202.5)
        return "Южное";
    else if(numVal <= 247.5)
        return "Юго-Западное";
    else if(numVal <= 292.5)
        return "Западное";
    else if(numVal <= 337.5)
        return "Северо-Западное";
    else if(numVal <= 360)
        return "Северное";
}

export {weather, getCity}