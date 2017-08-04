(function(){
  'use strict';
  //variables
  var $clockDisplay = document.querySelector('.clock-display');
  var $body = document.querySelector('body');
  var $line = document.querySelector('.line');


  function displayCurrentTime(){
    var currentTime = new Date();
    var hours = ("0" + currentTime.getHours()).slice(-2);
    var minutes = ("0" + currentTime.getMinutes()).slice(-2);
    var seconds = ("0" + currentTime.getSeconds()).slice(-2);
    setWidth();
    backgroundGradient();
    $clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
  }

  displayCurrentTime();

  window.setInterval(displayCurrentTime, 1000);

  function setWidth() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var lineWidth = (seconds/60)*100;
  var linePercent = lineWidth + "%";

  $line.style.width = linePercent;
}

function backgroundGradient(){
  var currentTime = new Date();
  var hours = (currentTime.getHours()).toString(16);
  var minutes = (currentTime.getMinutes()).toString(16);
  var seconds = (currentTime.getSeconds()).toString(16);

  $body.style.background = "#" + hours + minutes + seconds;
}


})();
