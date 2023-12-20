const userEmail = "";

if (userEmail) {
    console.log("got User Email");  
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt (0n), null, "", NaN

// truthy values
// true, 1, [], "0", 'false', " ",{}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
}

// Nullish Caolescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 16

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");;