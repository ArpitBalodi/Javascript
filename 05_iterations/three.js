// ******for of**********

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
// for (const greet of greeting) {
//     if(greet == " "){
//         continue;
//     }
//     else
//     // console.log(`Each character is ${greet}`);
// }

//***********Maps************

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, '-: ', value);
}

const myObject = {
    'Game1' : 'BGMI',
    'Game2' : 'COD'
} 

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }