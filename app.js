const form = document.querySelector('#form')
const nameCountry = document.querySelector('#country')
const nameCity = document.querySelector('#city')
const submit = document.querySelector('#submit')
const countryDisplay = document.querySelector('#country-display')
const temperatureDisplay = document.querySelector('#temperature')
const iconContainer = document.querySelector('#icon')
const climate = document.querySelector('#climate')
const maxTemp = document.querySelector('#max-temp')
const feelsLike = document.querySelector('#feels-like')
const hum = document.querySelector('#humidity')

function callApi(city, country) {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=913d4ab91e4f26d1038189cd6a7bdba1`
   fetch(url)
    .then(res => res.json())
    .then(data => {
        if ( data.cod == '404'){
            alert('ciudad no encontrada')
        }else{
            showWeather(data)
        }
    })
}

function showWeather(data){
    const {name, main:{temp,feels_like, temp_max, humidity}, weather:[arr]} = data;

    

    countryDisplay.textContent = name;
    temperatureDisplay.textContent = temp;


    iconContainer.innerHTML = `<img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">`;
    climate.textContent =`climate: ${ arr.main}`;
    feelsLike.textContent =`maximum temperature: ${feels_like}`;
    maxTemp.textContent =`feels like: ${temp_max}` ;
    hum.textContent =`humidity: ${humidity}` ;
}



form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const data = callApi(nameCity.value, nameCountry.value)
    
})