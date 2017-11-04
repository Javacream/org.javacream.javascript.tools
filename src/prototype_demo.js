var prototype = require('prototype')
var Person = prototype.Class.create({
  initialize: function(name) {
    this.name = name;
  },
  greet: function() {
    return 'Hello ' + this.name + ' from prototype';
  }
});
var thommy = new Person('Thommy')
console.log(thommy.greet())
document.body.innerHTML = thommy.greet();
