
// code for digital clock
function UpdatedTime(){
    const CurrentTime = new Date().toLocaleTimeString() ;
    document.querySelector(".Time").textContent = CurrentTime ;

}

setInterval(UpdatedTime , 1000) ;

UpdatedTime() ;



//code for analog clock

let hoursHand = document.querySelector('.hours') ;
let minutesHand = document.querySelector(".minute") ;
let secondsHand = document.querySelector(".second") ;


function Time(){
    const Currenttime = new Date() ;
    
    const hh = Currenttime.getHours() ;
    const mm = Currenttime.getMinutes() ;
    const ss = Currenttime.getSeconds() ;
    
    const hRot = 30*hh + mm/2 ; 
    const mRot = 6*mm ;
    const sRot = 6*ss ;
    
    hoursHand.style.transform =`rotate(${hRot}deg)` ;
    minutesHand.style.transform =`rotate(${mRot}deg)` ;
    secondsHand.style.transform =`rotate(${sRot}deg)` ;
}

setInterval(Time , 1000) ;
Time() ;