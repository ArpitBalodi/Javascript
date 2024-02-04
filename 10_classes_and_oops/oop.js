const user = {
    username: "Arpit",
    loginCOunt: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCOunt, isLoggedIn){
        this.username = username;
        this.loginCOunt = loginCOunt;
        this.isLoggedIn = isLoggedIn;


        this.greeting = function(){
            console.log(`Welcome ${this.username}`);
        }

        // return this;
}

const user1 = new User("Arpit", 12, true)
const user2 = new User("ChaiAurCOde", 11, false);

console.log(user1.constructor);
// console.log(user2);

