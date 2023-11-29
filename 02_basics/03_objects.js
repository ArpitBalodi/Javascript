//Singleton

// Object.create

//Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Arpit",
    "full Name": "Arpit Balodi",
    [mySym]: "myKey1",
    age: 20,
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abc@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "arpit@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS users");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());