// totalSeconds holds value for timer
// modalDelay hold value, when winner modal should apear
// scorre holds value for score counter
var totalSeconds = 0;
const modalDelay = 200;
var score = 0;
/*
Checks if all light squares are empty and returns true if so
*/
function areLightSquaresEmpty(){
    let lightSquaresLength = document.getElementsByClassName("light active").length;
    if (lightSquaresLength === 0) {
        return true;
    }
    else {
        return false;
    }
}
/*
Checks if all dark squares holds active class and returns true or false
*/
function areDarkSquaresCorrect() {
    let activatedDarkSquaresLength = document.getElementsByClassName("dark active").length;
    let allDarkSquaresLength = document.getElementsByClassName("dark").length;
    if (activatedDarkSquaresLength !== allDarkSquaresLength) {
        return false;
    }
    else {
        return true;
    }
}
/*
Checks if all squares are correct, if so, stops timer, shows winners modal
*/
function checkUserWinningStatus() {
    if (areDarkSquaresCorrect() && areLightSquaresEmpty()) {
        // User pushed the correct squares, clear timer and show the winning score modal
        clearTimer();
        // A delay is added, so that last dark square would be filled, 
        //otherwise modal shows up, and last right square not filled
        //only after modal closed
        setTimeout(function() {
            $(document).ready(function(){
                $("#win").modal("show");
            });
        }, modalDelay);
    }
}


$(document).ready(function() {
    $("td").click(function(e) {
        if (e.target.classList.contains("active")) {
            $(this).removeClass("active");
        } 
        else {
            $(this).addClass("active");
        }
        userWon();
    });
});


var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    if(hour < 10)
        hour = "0"+hour;
    if(minute < 10)
        minute = "0"+minute;
    if(seconds < 10)
        seconds = "0"+seconds;
        document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        document.getElementById("lost-time").innerHTML = hour + ":" + minute + ":" + seconds;
        document.getElementById("win-time").innerHTML = hour + ":" + minute + ":" + seconds;
    if (userWon())
        myStopFunction();
    if ($("#give-up").click(function() {
        myStopFunction();
    }));     
}


function myStopFunction() {
    clearInterval(timerVar);       
}


$(document).ready(function() {
    var score = 0;
    $(".dark").click(function(e) {
        score +=1;
        document.getElementById("scores").innerHTML = "Score:" + score;
        document.getElementById("lost-score").innerHTML = "Score:" + score;
        document.getElementById("win-score").innerHTML = "Score:" + score;
    });
});