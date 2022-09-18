// document.getElementById("start").addEventListener("click",start);
"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    var sethour = document.getElementById('hours').value;
    var setmin = document.getElementById("minutes").value;
    var setsec = document.getElementById("seconds").value;
    var settime = Number(sethour) * 3600 + Number(setmin) * 60 + Number(setsec);
    console.log(settime);
    pause();
    cron = setInterval(() => { timer(settime); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    pause();
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
    document.getElementById('hours').value = "00"; 
    document.getElementById("minutes").value = "00";
    document.getElementById("seconds").value = "00";
  }

  function timer(settime) {
      if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    if ((hour*3600 + minute*60 + second) <= settime) {
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
    } else {
        alert("Time is Up");
        pause();
    }
  }
 
  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }

  /* Title Animation functions */
  var origTitle, animatedTitle, timer;

function animateTitle() {
  var currentState = false;
  origTitle = document.title;  // save original title
  animatedTitle = "Time is Up!";
  timer = setInterval(startAnimation, 2000);

  function startAnimation() {
    // animate between the original and the new title
    document.title = currentState ? origTitle : animatedTitle;
    currentState = !currentState;
  }
}

function restoreTitle() {
  clearInterval(timer);
  document.title = origTitle; // restore original title
}

// Change page title on blur
$(window).blur(function() {
    animateTitle();
});

// Change page title back on focus
$(window).focus(function() {
    restoreTitle();
});