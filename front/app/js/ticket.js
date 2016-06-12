function Person(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.printPerson = function() {
        console.log(name + " " + this.occupation);
    }
}

var p1 = new Person('Alan');
var p2 =  new Person('Bob');

p1.printPerson();
p2.printPerson();
