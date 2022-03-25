/* Lecture: Values and Variables
let js = 'amazing';
math = 40 + 8 + 23 - 10;
console.log(math);

console.log("Tony");
console.log(23);

let firstName = "Tony";
console.log(firstName);
*/

/* Lecture: Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof ('Tony'));

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// typeof bug
console.log(typeof null);
*/

/* Lecture: let, const and var
let age = 30;
age = 31;

// const makes a variable immutable
const birthYear = 1991;
// birthYear = 1990;

// const variable must be initialized
// const job;

// var is the old way to define a variable
var job = 'programmer';
job = 'teacher';

lastName = 'Joe';
console.log(lastName);
*/

/* Lecture: Basic Operators
// Math Operators
const now = 2022;
const ageTony = now - 1990;
const ageSarah = now - 1993;
console.log(ageTony, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageTony * 2, ageTony / 10, 2 ** 3);

const firstName = 'Tony';
const lastName = 'Joe';
console.log(firstName + ' ' + lastName);

// Assignments Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison Operators
// >, <, >=, <=
console.log(ageTony > ageSarah);
console.log(ageSarah <= 19);

const isFullAge = ageSarah >= 18;
console.log(now - 1990 > now - 1993);
*/

/* Lecture: Operator Precedence
const now = 2022;
const ageTony = now - 1990;
const ageSarah = now - 1993;

console.log(now - 1990 > now - 1993);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageTony + ageSarah) / 2;
console.log(ageTony, ageSarah, avgAge);
*/

/* Lecture: Strings and Template Literals
const firstName = 'Tony';
const job = 'student';
const birthYear = 1990;
const year = 2022;

const tony = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(tony);

const tonyNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(tonyNew);

console.log(`Just a regular string...`);

console.log('String with \n\ multiple \n\ lines');

console.log(`String
multiple
lines`);
*/

/* Lecture: Taking Decisions: if/else Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarach is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/* Lecture: Type Conversion and Coercion
// type conversion
const inputYear = '1990';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Tony'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');
*/

/* Lecture: Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Tony'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/* Lecture: Equality Operators: == (loose) vs. === (strict)
const age = 18;
if (age === 18) console.log('You just became an adult. (strict)');
if (age === '18') console.log('You just became an adult. (strict)');
if (age == 18) console.log('You just became an adult. (loose)');
if (age == '18') console.log('You just became an adult. (loose)');

const favourite = Number(prompt("What's your favorite number!"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number.');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23)console.log('Why not 23?');
*/

/* Lecture: Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }

const isTried = false; // C
console.log(hasDriversLicense || hasGoodVision || isTried);

if (hasDriversLicense && hasGoodVision && !isTried) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

/* Lecture: Switch Statement
const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure.');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
*/

/* Lecture: Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Tony';
console.log(`I'm ${2022 - 1990} years old ${me}`);
*/

/* Lecture: Conditional (Ternary) Operator
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/