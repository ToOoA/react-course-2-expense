// Object desctructuring

// const person = {
//     name: 'Bertrand',
//     age: 45,
//     location: {
//         city: 'Nantes',
//         temp: 10
//     }
// };

// const name = person.name;
// const age = person.age;
// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`Il fait ${temperature} à ${city}.`)
// };

// Array desctructuring

const address = ['1299 Jump Street','Nantes','Pays de la Loire','44219'];

// const [, city, state] = address;
const [, , state='New York'] = address;

console.log(`You are in ${state}.`)