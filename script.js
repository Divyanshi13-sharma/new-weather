const inputBox=document.querySelector(".input-box");
const weather_img=document.querySelector("#Wheather_img");
const temprature=document.querySelector("#temperature");
const searchBtn=document.querySelector("#searchBtn");
const description=document.querySelector(".description")
const humidity=document.querySelector("#humidity");
const winds=document.querySelector("#wind-speed");
const location_not_found=document.querySelector(".location_not_found");

async function checkWeather(city){
    const api_key="e8ce9fa72fff3d90c0f53e3711761613";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(Response=>Response.json());
    console.log(weather_data);
     if(weather_data.cod==="404"){
        location_not_found.style.display="flex";
        console.log("error");
        weather_img.style.display="none";
        return ;
    }
    temprature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    winds.innerHTML=`${weather_data.wind.speed}km/H`;
   
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src="assets/clear.png";
            break;
        case 'Rain':
            weather_img.src="assets/rain.png";
            break;
        case 'Mist':
            weather_img.src="assets/mist.png";
            break;
        case 'Snow':
            weather_img.src="assets/snow.png";
            break;

    }
    console.log(weather_data)

}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})