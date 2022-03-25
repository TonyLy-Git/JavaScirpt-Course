/* Lecture: Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio'; reserves these words
*/

/* Lecture: Fuctions
function logger() {
    console.log('My name is Tony');
}

// calling/running/invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23')
*/

/* Lecture: Function Declaration vs Expressions
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/* Lecture: Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Tony'));
*/

/* Functions Calling Other Functions
function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/* Lecture: Introduction to Array
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Tony';
const tony = [firstName, 'Bob', 2037 - 1990, 'student', friends];
console.log(tony);
console.log(tony.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length = 1])];
console.log(ages);
*/

/* Lecture: Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
const popped = friends.pop(); // last
console.log(friends);
console.log(popped);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));
*/

/* Lecture: Introduction to Objects
const tony = {
    firstName: 'Tony',
    lastName: 'Bob',
    age: 2037 - 1990,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

/* Lecture: Dot vs. Bracket Notation
const tony = {
    firstName: 'Tony',
    lastName: 'Bob',
    age: 2037 - 1990,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(tony);

console.log(tony.lastName);
console.log(tony['lastName']);

const nameKey = 'Name';
console.log(tony['first' + nameKey]);
console.log(tony['last' + nameKey]);

// console.log(tony.'last' + nameKey);

// const interestedIn = prompt('What do you want to know about Tony? Choose between firstName, lastName, age, job, and friends');
// console.log(tony[interestedIn]);

// if (tony[interestedIn]) {
//     console.log(tony[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

tony.location = 'USA';
tony['twitter'] = 'No twitter account';
console.log(tony);

// Challenge
// "Tony has 3 friends, and his best friend is called Michael"
console.log(`${tony.firstName} has ${tony.friends.length} friends, and his best friends is called ${tony.friends[0]}`);
*/

/* Lecture: Object Methods
const tony = {
    firstName: 'Tony',
    lastName: 'Bob',
    birthYear: 1990,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${tony.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    }
};

console.log(tony.calcAge());
console.log(tony.getSummary());
*/

/* Lecture: Iteration: The For Loop
console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/* Lecture: Looping Arrays, Breaking and Continuing
const tony = [
    'Tony',
    'Bob',
    2037 - 1990,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < tony.length; i++) {
    console.log(tony[i], typeof tony[i]);
    types[i] = typeof tony[i];
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---Only Strings---');
for (let i = 0; i < tony.length; i++) {
    if (typeof tony[i] !== 'string') continue;

    console.log(tony[i], typeof tony[i]);
}

console.log('---Break With Number');
for (let i = 0; i < tony.length; i++) {
    if (typeof tony[i] === 'number') break;

    console.log(tony[i], typeof tony[i]);
}
*/

/* Lecture: Looping Backwards and Loops in Loops
const tony = [
    'Tony',
    'Bob',
    2037 - 1990,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = tony.length - 1; i >= 0; i--) {
    console.log(i, tony[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);
    }
}
*/

/* Lecture: The While Loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repitition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/