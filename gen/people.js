"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(firstName, lastName) {
    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.lastName = lastName;
};

function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}

var user = new Person("Georg", "Metzger");

document.body.innerHTML = greet(user);