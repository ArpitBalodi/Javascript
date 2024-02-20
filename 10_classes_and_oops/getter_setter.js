class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}arpit`
    }

    set password(value){
        this._password = value;
    }
}

const arpit = new User("a@arpit.ai","abc")
console.log(arpit.password);
console.log(arpit.email);