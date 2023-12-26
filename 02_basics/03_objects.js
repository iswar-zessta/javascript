// singletone

// Object literals

let mySym = Symbol('key1');

const person = {
    name: 'iswar',
    "full Name": 'iswar chandra rana',
    age: 30,
    [mySym]: 'mykey1',
    city: 'Udala',
    email: 'iswar@zessta.com',
    isLoggedin: true
};

// console.log(person.email);
// console.log(person['email']);
// console.log(person["full Name"]);


person.age = 23;
// Object.freeze(person);
person.age = 30;

// console.log(person);


person.greeting = function () {
    console.log(`Hello ${this.name}`);
}

console.log(person.greeting()); 