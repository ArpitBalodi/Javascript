const user = {
    username: "arpit",
    price: 999,

    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);
         console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "harry"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "arpit" 
//     console.log(this.username);
// }


// const one = function(){
//     let username = "arpit" 
//     console.log(this.username);
// }

// const one = () => {
//     let username = "arpit" 
//     console.log(this);
// }
// one()

// const addTwo =(num1,num2) => {
//     return num1 + num2;
// }
// const addTwo =(num1,num2) =>  (num1 + num2);
const addTwo =(num1,num2) =>  ({username: "arpit"})

console.log(addTwo(3,4))

const myArray = [2,5,3,8]
// myArray.forEach(() => ())