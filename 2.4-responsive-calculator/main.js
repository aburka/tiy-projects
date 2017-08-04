//create an empty array
var numberList = [];
//convert array to string
var equationInput = numberList.join('')
//evaluate string
var equationAnswer = eval(equationInput)

//pushes value of number into numberList array
function alertNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  var lastPressed = numberList.push(number);
}

//listens for the event of clicking on a number button and calls the value of the function alertNumber
[].forEach.call(document.querySelectorAll('.number'), function(element){
  element.addEventListener('click', alertNumber);
}, false);

//pushes value of operator into numberList array
function alertOperatorPressed(event) {
  var button = event.target;
  var text = button.textContent;
  var lastPressed = numberList.push(text);
}

//listens for the event of clicking on a number button and calls the value of the function alertOperatorPressed
[].forEach.call(document.querySelectorAll('.operator'), function(element){
  element.addEventListener('click', alertOperatorPressed);
}, false);

//alerts value of clear, clears numberList array
function alertClearPressed(event) {
  var button = event.target;
  numberList.length = 0;
  var text = button.textContent;
  alert(text);
}

//listens for the event of clicking on a number button and calls the value of the function alertClearPressed
[].forEach.call(document.querySelectorAll('.clear'), function(element){
  element.addEventListener('click', alertClearPressed);
}, false);

//alerts value of equals
function alertEqualsPressed(event) {
  var button = event.target;
  var text = button.textContent;
  var equationInput = numberList.join('')
  var equationAnswer = eval(equationInput)
  alert(equationAnswer)
}

//listens for the event of clicking on a number button and calls the value of the function alertEqualsPressed aka the answer
[].forEach.call(document.querySelectorAll('.equals'), function(element){
  element.addEventListener('click', alertEqualsPressed);
}, false);
