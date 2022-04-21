//declaring variables for timer, creating basic timer function

let seconds = 0;
let interval ;

function pomodoro(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
 
        seconds--;
        if(!seconds){
             clearInterval(interval); 
             alert("🚨 It is Cool 😎. I wish you could share ");
        }
   },1000)
};

//starter code from https://levelup.gitconnected.com/creating-a-pomodoro-timer-in-javascript-in-10-lines-of-code-868f577be63c
