
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function add(number1, number2){
      
//       console.log(number1+number2);
// }

function add(number1, number2){
      
    // let result = number1 + number2
    // return result
    return number1 + number2;
}

const result = add(3, 5)
// console.log("Result:", result);

function loginUserMessage(username = "Harry"){
    if(!username){
      console.log("Please enter a username");
      return
    }
      return `${username} just logged in`
}

// console.log(loginUserMessage("Arpit"))
// console.log(loginUserMessage("Arpit"))

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,600,2000));

// const user = {
//   username: "Arpit",
//   prices: 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
  username: "Harry",
  price: 399
});

const myNewArray = [200, 400, 100, 500];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 500]));