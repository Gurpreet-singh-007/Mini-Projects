const buttons = document.querySelectorAll(".btn") ;
const arthButtons = document.querySelectorAll("arth") ;
const inputBar = document.querySelector(".output") ;
const answerPreview = document.querySelector('.answer') ;


let string = '' ;
inputBar.value = '0' ;
let inputAllowed = true ;

function evaluateString(cal){
    return(eval(cal)) ;
}

function containsNegative(a){
    return a.toString().includes("-(") ;
}

function updateFontSize(){
    const currentLength = string.length ;
    const maxLimit = document.querySelector('.maxLimit') ;
    
    if( currentLength > 9 && 34 >= currentLength){
        inputBar.style.fontSize = '24px';
        inputBar.style.marginTop = '50px' ;
        inputBar.style.lineHeight = '24px' ;
        inputAllowed = true ;
        maxLimit.style.display = 'none';
    }
    else if(currentLength >= 35 && currentLength < 75){
        inputBar.style.fontSize = '18px';
        inputBar.style.marginTop = '50px' ;
        inputBar.style.lineHeight = '18px' ;
        inputBar.style.height = '54px' ;
        maxLimit.style.display = 'none';
        inputAllowed = true ;
    }
    else if (currentLength >= 75){
        inputAllowed = false ; 
        console.log("limit reached");
        maxLimit.style.display = 'block';
        inputBar.style.marginTop = '38px' ;
    }
    else{
        inputBar.style.fontSize = '48px';
        inputBar.style.marginTop = '50px' ;
        inputBar.style.lineHeight = '48px' ;
        inputAllowed = true ;
        maxLimit.style.display = 'none';
    }
}

let buttonsArr = Array.from(buttons) ;

buttonsArr.forEach(function(buttons){
    buttons.addEventListener("click" , function(e){
        if (!inputAllowed && e.target.innerHTML !== 'DEL' && e.target.innerHTML !== 'AC') { return;} // Stop processing further input
        else if(e.target.innerHTML == '='){
            const answer = evaluateString(string) ;
            string = answer ;
            inputBar.value = string ;
            answerPreview.textContent = '';
        }
        else if(e.target.innerHTML == 'AC'){
            string = '' ;
            inputBar.value = '0' ;
            answerPreview.textContent = '';
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length -1) ;
            inputBar.value = string  ;
            answerPreview.textContent = evaluateString(string) ;
            if(string == ''){
                inputBar.value = '0' ;
                answerPreview.textContent = '' ;
            }
        }
        else if(e.target.innerHTML == 'ABS'){
            if(containsNegative(string)){
                string = string.slice(2 , string.length -1);
                inputBar.value = string ;
                answerPreview.textContent = string ;
            }
            else if(parseInt(string) < 0){
                const newString = `-(${string})` ;
                string = newString ;
                inputBar.value = string ;
                answerPreview.textContent = eval(newString) ;
            }
        }
        else if(e.target.classList.contains("arth")) {
            console.log(string.length);
            string += e.target.innerHTML ;
            inputBar.value = string ;
        }
        
        else{
            string +=e.target.innerHTML ;
            inputBar.value = string ;
            answerPreview.textContent = evaluateString(string);
        }
        updateFontSize() ;
    })
})

