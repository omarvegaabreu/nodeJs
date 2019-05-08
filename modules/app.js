
var greet = require('./greet');

greet();


var person = {
  firstName: 'John',
  lastName: 'Smith',
  greet: function () {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
  }
};

person.greet();

console.log(person['firstName']);

//INHERITANCE: ONE OBJECT GETS ACCESS TO THE PROPERTIES AND METHODS OF ANOTHER OBJECT.

/*** /FUNCTION CONSTRUCTORS:
 * A NORMAL FUNCTION THAT IS USED TO CONSTRUCT OBJECTS.
 * 
 * THE 'THIS' VARIABLE POINTS A NEW EMPTY OBJECT, 
 * AND THAT OBJECT IS RETURNED FROM THE FUNCTION AUTOMATICALLY.
 * 
*/


  