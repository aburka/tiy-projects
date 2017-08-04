(function(){
  'use strict';

  var calculation = 0;
  var displayedCalculation = "0";
  var pendingOperation;
  var $display = document.querySelector('.display-number');

//event handler functions

function numberButtonPressed(event) {
  var number = Number (event.target.textContent);
  if(pendingOperation !== undefined) {
    //calculate using the operation
    switch (pendingOperation) {
      case "+":
        calculation += number;
        break;
      case "-":
        calculation -= number;
        break;
      case "*":
        calculation *= number;
        break;
      case "/":
        calculation /= number;
        break;
    }
    pendingOperation = undefined;
    $display.textContent = number;
  } else {
  displayOrConcatenateNumber(number);
  }
}

function decimalButtonPressed(event) {
  pendingOperation = event.target.textContent;
}

function operatorButtonPressed(event) {
  pendingOperation = event.target.textContent;
}

function equalButtonPressed(event) {
  $display.textContent = calculation;
}

function clearButtonPressed(event) {
  calculation = 0;
  $display.textContent = "0";
}

//utility functions

function displayOrConcatenateNumber(number) {
  // updating calculation and displayedCalculation
  if(calculation === 0) {
    //display number
    calculation = number;
    displayedCalculation = String(number);
  }  else {
    //concatenate number
    calculation = Number(displayedCalculation + number);
    displayedCalculation = displayedCalculation + number;
  }

  // actually displaying displayedCalculation
  $display.textContent = displayedCalculation;
}
//event handlers

[].forEach.call(document.querySelectorAll('.keypad-button.number'), function(element){
    element.addEventListener('click', numberButtonPressed);
  }, false);

[].forEach.call(document.querySelectorAll('.keypad-button.operator'), function(element){
  element.addEventListener('click', operatorButtonPressed);
}, false);

document.querySelector('.decimal').addEventListener('click', decimalButtonPressed);

document.querySelector('.equal').addEventListener('click', equalButtonPressed);

document.querySelector('.clear').addEventListener('click', clearButtonPressed);

})();
