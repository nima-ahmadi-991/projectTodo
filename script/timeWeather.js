const timeInfo=document.getElementById("date");
const ulList=document.getElementById("clock");
const urlTime=`https://kaaryar0506reactblog.liara.run/current/time`;

const getTimer=async()=>{
    const respons=await fetch(urlTime);
    const dates= await respons.json();
    ulList.innerHTML+=`<li>
       <span class="shamsi">${dates.shamsi.month}<i>${dates.shamsi.dayInMonth}</i></span>
        </li>
        <li class="miladi">
        <i>${dates.miladi.year}</i>/<span>${dates.miladi.month}/
         ${dates.miladi.dayInMonth}</span>
         <span class="islamicHijri">${dates.islamicHijri.month}/<i>${dates.islamicHijri.year}
        ${dates.islamicHijri.dayInMonth}</i><span/>
         </li>
         <li class="time-date-text"><span class="material-symbols-outlined time-text">
         expand_more
         </span> اوقات شرعی
         <span class="material-symbols-outlined time-text">
         expand_more</span> تایمر
          </li>`
    console.log("timeee",dates)
}
getTimer()
//clock
function getWatch(){    
        let minut=new Date().getMinutes(); 
        let hour=new Date().getHours(); 
        hour=hour < 10 ? `0${hour}`:hour;
        minut=minut < 10? `0${minut}`:minut;
        time=hour +":" +minut;
         document.querySelector(".watch").innerHTML=time
       
    
}

getWatch()
setInterval(getWatch,1000);

 
