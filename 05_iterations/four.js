// Loops in Object

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//For in loop in array

const programming = ["Js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);
}


// *************************

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
// }