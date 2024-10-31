let input = document.querySelector("input") ;
let output = document.querySelector(".output") ;
let calculate  =document.querySelector("button") ;




// calculate.addEventListener('click' , age());
function age(){
    //Get the current date
    let currentDate = new Date();
    let date = currentDate.getDate() ;
    let month = currentDate.getMonth() +1;
    let year  =currentDate.getFullYear();

    // Divides the input date
    input.max = new Date().toISOString().split("T")[0];
    let birthDate= new Date(input.value) ;
    let date1 = birthDate.getDate() ;
    let month1 = birthDate.getMonth() +1 ;
    let year1 = birthDate.getFullYear() ;

    let date2,month2,year2 ;
    year2 = year - year1 ; 

    if(month >= month1){
        month2 = month - month1 ;
    }
    else{
        year2-- ;
        month2 = 12 + month -month1 ;
    }

    if(date >= date1){
        date2 = date  - date1 ; 
    }
    else{
        month2-- ;
        date2  = getDaysInMonth(year1 , month1) + date - date1 ;
    }

    function getDaysInMonth(years , month){
        return new Date(years ,month , 0).getDate() ;
    }
    output.innerHTML = `You are <span>${year2}</span> years, <span>${month2}</span> months, and <span>${date2}</span> days old.`  ;

}





