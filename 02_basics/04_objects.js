// const tinderUser = new Object()      -> Singleton Object

const tinderUser = {}      //   -> Non - Singleton Object

tinderUser.id = "123hij";
tinderUser.name = "Harry";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "123@gmail.com",
    fullname: {
        userfullName: {
            firstName: "Arpit",
            lastName: "Balodi"
        }
    }
}
// console.log(regularUser.fullname.userfullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1,...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "Learning JS",
    price: "999",
    Coursemedium: "online"
}

const {Coursemedium:medium} = course;
console.log(medium);

// {
//     name: "Arpit",
//     coursename: "Learning JS",
//     price: "free"
// }

