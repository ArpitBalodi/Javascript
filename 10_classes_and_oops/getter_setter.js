class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase()
    }

}

const arpit = new User("a@arpit.ai","124")
console.log(arpit.password);