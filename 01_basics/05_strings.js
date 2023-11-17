const name = 'Arpit';
const languageCount = 2;

// console.log(`My name is ${name} and I know ${languageCount} languages `);

//Declaration of String
const gameName = new String('table-tennis');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('G'));

const newString = gameName.substring(0, 8);
// console.log(newString);

const anotherString = gameName.slice(0, 2);
// console.log(anotherString);

const newStringOne = "    arpit   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google.com";
console.log(url.replace('google','github'));

console.log(url.includes('github'));

console.log(gameName.split('-'));
