//object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.specs = function myfun() {console.log(this.firstName+""+this.lastName);}

 // this.specs =()=> {console.log(this.firstName+""+this.lastName);}
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

//we cangt add a new property to an object. 
// Person.nationaltiy="Indian"; we cant add like this
myFather.specs()
