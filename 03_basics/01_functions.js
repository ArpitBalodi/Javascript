
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
console.log(loginUserMessage("Arpit"))

