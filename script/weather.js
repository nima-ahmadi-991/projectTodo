const weatherInfo=document.querySelector(".weatherInfo");
const url=`https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light`
const getweather=async()=>{
    const respons=await fetch(url);
    const status= await respons.json();
    console.log(status)
    for(const stat of status){
        weatherInfo.innerHTML+=`<li class="weather-title"><span class="${stat.current >10?"clouds":"sunny"}">
        </span><i>${stat.current}</i></li>
        <li class="wather-text">${stat.customDescription.text}
        ${stat.customDescription.emoji}</li>
        <li class="weather-deg">حداکثر${stat.max}. حداقل ${stat.min} </li>
        <li class="weather-augury"><span class="material-symbols-outlined">
        expand_more
        </span>پیش بینی</li>`
    }
   
}
getweather()
