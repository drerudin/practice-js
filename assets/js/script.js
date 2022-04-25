// // var, let, const

// // data types = string, numbers, boolean, null, undefined

// const name='John';
// const age = 30;


// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// // Template String
// console.log(`My name is ${name} and I am ${age}`)


// Arrays

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// // console.log(person.hobbies[1]);

// // const {fistName, lastName, address: {city}} = person;

// // console.log(city);

// person.email = 'john@gmail.com'


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// While
// let i = 0;
// while(i < 10) {
//     console.log('While Loop Number: ' + i);
//     i++;
// }

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// for(let todo of todos) {
//     console.log(todo.text)
// }

// forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);

// const x = 11;

// const color = 'green';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//         case 'blue':
//             console.log('color is blue');
//             break;
//             default:
//                 console.log('color is NOT red or blue');
//                 break;
// }

// FUNCTIONS
// function addNums(num1 = 5, num2 = 4) {
//     return num1 + num2;
// }

// console.log(addNums(5, 5));

// Constructor function

// function Pizza(crust, filling, topping) {
//     this.crust = crust;
//     this.filling = filling;
//     this.topping = topping;
// }

// // Class
// class Pizza {
//     constructor(crust, filling, topping) {
//         this.crust=crust;
//         this.filling=filling;
//         this.topping=topping;
//     }
// }




// // Instantiate object
// const pizza1 = new Pizza("thin", "garlic", "chicken");
// const pizza2 = new Pizza("deep dish", "marinara", "pepperoni");

// console.log(pizza2.filling);




// ELEMENTS
// Single element
document.getElementById('');

// Multiple element