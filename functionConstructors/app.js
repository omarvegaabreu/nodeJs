
// console.log('hola');

function Person(firstName, lastName) {
  // capital letter for me to know its a constructor
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.bye = function () {
  console.log("Bye, " + this.firstName + ' ' + this.lastName);
};

Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName);
};

var john = new Person('John','Doe');

john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();
john.bye();
jane.bye();

