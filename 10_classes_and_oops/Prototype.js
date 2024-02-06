// let myName = "Arpit   ";
// let myChannel = "Chai   ";

// console.log(myName.truelength());

let myHeros = ["Thor","Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.arpit = function(){
    console.log("Arpit is present in all Object");
}

Array.prototype.heyArpit = function(){
    console.log("Arpit says Hello");
}
// heroPower.arpit();
// myHeros.arpit();
// myHeros.heyArpit();
// heroPower.heyArpit();

//Inheritance

const User = {
    name: "Arpit",
    email: "xyz@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Arpit".trueLength();
"IceTea".trueLength();