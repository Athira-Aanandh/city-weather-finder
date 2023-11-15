const apiKey='4bdbfb5a8171c742601fbdcd69685425';
const URL='https://api.openweathermap.org/data/2.5/weather?units=metric'
const error=document.getElementById('error-message')
const tempContainer = document.getElementById('temp')
const cityNameContainer= document.getElementById('citycontainer')
const humidityContainer= document.getElementById('humidity-container')
const windContainer = document.getElementById('wind-container')

async function getWeather(city)
{
    
    const responce = await fetch(URL+`&appid=${apiKey}`+`&q=${city}`)
    const data =  await responce.json()
    return data
}

async function getWeatherDetails(){
    const city= document.getElementById('city-name').value
    
    if(city=='' || city==null){
        // error.appendChild(document.createTextNode("This just got added"));
        error.textContent='Please Enter A City Name'
        return;
    }
    const data= await getWeather(city)
    if(data.cod!=200){
        error.textContent=data.message
    }
    const weather= data.weather[0].main
    const humidity = data.main.humidity
    const wind = data.wind.speed
    const temp = data.main.temp
console.log(weather)
    tempContainer.textContent=temp
    cityNameContainer.textContent=city
    humidityContainer.textContent=humidity
    windContainer.textContent=wind
    // switch(weather){
    //     case 'Mist': 
    //     break;
    //     default: 
    // }

}