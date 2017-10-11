class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName;
    }
}

function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}

var user = new Person("Georg", "Metzger");

document.body.innerHTML = greet(user);
