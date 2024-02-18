class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }

}

const arpit = new User("hitesh");
// console.log(arpit.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId());