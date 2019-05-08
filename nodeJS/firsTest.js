var a = 'hello';
var b = 'word!';

console.log(a + ' ' + b);


//function statement

function greet() {
  console.log('hi');
}

greet(); // will log hi 

//functions are fist-class
function logGreeting(fn) {
  fn();
}

logGreeting(greet); // will log hi

//function expression: a block of code that results in a value

var greetMe = function () {
  console.log('Hi Tony');
}

greetMe();

logGreeting(greetMe); // will log hi tony

logGreeting(function() {
  console.log('hola omar');
});