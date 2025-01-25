document.addEventListener('DOMContentLoaded' , function(){

    const searchButton = document.getElementById("search-btn") ;
    const usernameInput = document.getElementById("user-input") ;
    const statsContainer = document.getElementsByClassName("stats-container") ;
    const easyProgressCircle = document.querySelector(".easy-progress") ;
    const mediumProgressCircle = document.querySelector(".medium-progress") ;
    const hardProgressCircle = document.querySelector(".hard-progress") ;
    const easyLabel = document.getElementById("easy-label") ;
    const mediumLabel = document.getElementById("medium-label") ;
    const hardLabel = document.getElementById("hard-label") ;
    const cardStatsContainer = document.getElementsByClassName("stats-cards") ;
    const clearButton = document.querySelector(".input-clear-btn") ;


    clearButton.style.display = 'none' ;

    usernameInput.addEventListener('input' , (event) => {
        if (event.type === 'input' && usernameInput.value !== '') {
            clearButton.style.display = 'block';
        } else if (event.type === 'input' && usernameInput.value === ''){
            clearButton.style.display = 'none';
        }
    })

    clearButton.addEventListener('click' , () => {
        usernameInput.value = '' ;
        clearButton.style.display ='none' ;
    })

    function validateUsername(username){
        if(username.trim() === ""){
            alert("Username should not be empty") ;
            return false ;
        }
        const regex = /^[a-zA-Z0-9_ -]{1,25}$/
        const isMatching = regex.test(username) ;
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}` ;
        try{
            searchButton.textContent = "Searching..." ;
            searchButton.disabled = true ;
            const response = await fetch(url) ;
            if(!response.ok){
                throw new Error("Unable to fetch the user details") ;
            }
            const data = await response.json();
            displayUserData(data) ;
        }
        catch(error){
            statsContainer.innerHTML = `<p>No data found</p>`
        }
        finally{
            searchButton.textContent = "Search" ;
            searchButton.disabled = false ;
        }
    }

    function updateProgress(solved , total , label , circle){
        const progressDegree = (solved/total) * 100 ;
        console.log(progressDegree);
        circle.style.setProperty("--progress-degree" , `${progressDegree}deg`);
        label.textContent = `${solved}/${total}` ;
        console.log("easy");
    }

    function displayUserData(data){
        //Total Questions
        const totalQuestions = data.totalQuestions ;
        const totalHardQuestions = data.totalHard ;
        const totalMediumQuestions = data.totalMedium ;
        const totalEasyQuestions = data.totalEasy ;

        //Solved Questions
        const solvedQuestions = data.totalSolved ;
        const solvedEasyQuestions = data.easySolved ;
        const solvedMediumQuestions = data.mediumSolved ;
        const solvedHardQuestions = data.hardSolved ;


        updateProgress(solvedEasyQuestions, totalEasyQuestions , easyLabel , easyProgressCircle) ;
        
        updateProgress(solvedMediumQuestions, totalMediumQuestions , mediumLabel , mediumProgressCircle) ;

        updateProgress(solvedHardQuestions, totalHardQuestions , hardLabel , hardProgressCircle) ;
        
    }

    searchButton.addEventListener('click' , () => {
        const username = usernameInput.value ;
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })
})