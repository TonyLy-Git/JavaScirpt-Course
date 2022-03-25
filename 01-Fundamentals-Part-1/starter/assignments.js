
// Lecture: Values and Variables
let country = 'United States of America';
let continent = 'North America';
let population = 328.2
// console.log(country);
// console.log(continent);
// console.log(population);

// Lecture: Data Types
let isIsland = false;
let language;
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// Lecture: let, const and var
language = 'English';
const birthYear = 1990;
// birthYear = 1991;

// Lecture: Basic Operators
let halfCountry = population / 2;
// population++;
// console.log(population);
let finlandPopulation = 6;
// console.log(population > finlandPopulation);
let avgCountryPopulation = 33;
// console.log(population < avgCountryPopulation);
let description = 'Protugal is in Europe, and its 11 million people speak portuguese';

// Lecture: Strings and Template Literals
description = `Protugal is in Europe, and its 11 million people speack protuguese`;
// console.log(description);

// Lecture: Taking Decisions: if/else Statements
// if (population > avgCountryPopulation) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${avgCountryPopulation - population} lower average.`);
// }

// Lecture: Type Conversion and Coercion
// console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2);

// Lecture: Equality Operators: == vs. ===
// const numNeighours = Number(prompt('How many neighbour countries does your country have!'));
// if (numNeighours === 1) {
//     console.log('Only 1 border!')
// } else if (numNeighours > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('No borders!');
// }

// Lecture: Logical Operators
const idealLanguage = 'English';
const maxPopulation = 50;

// if (!isIsland && language == idealLanguage && population <= maxPopulation) {
//     console.log('You should live is ${country}.');
// } else {
//     console.log('${Country} does not meet your criteria.');
// }

// Lecture: Switch Statement
// const language = 'chinese';
switch (language) {
    case 'chinese':
    case 'mandarin':
        // console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        // console.log('2nd place in number of native speaks');
        break;
    case 'english':
        // console.log('3rd place');
        break;
    case 'hindi':
        // console.log('Number 4');
        break;
    case 'arabic':
        // console.log('5th most spoken language');
        break;
    default:
        // console.log('Great language too :D');
        break;
}
