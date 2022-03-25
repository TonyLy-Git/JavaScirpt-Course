// Lecture: Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its caplity city is ${capitalCity}.`;
}
// console.log(describeCountry('USA', 321, `Washington D.C.`));

// Lecture: Function Declarations vs Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const usa1 = percentageOfWorld1(321);
// console.log(usa1);
const china1 = percentageOfWorld1(1441);
// console.log(china1);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const usa2 = percentageOfWorld2(321);
// console.log(usa2);
const china2 = percentageOfWorld2(1441);
// console.log(china2);

// Lecture: Arrow Functions
const percentageOfWorld3 = population => population / 7900 * 100;
const usa3 = percentageOfWorld3(321);
// console.log(usa3);
const china3 = percentageOfWorld3(1441);
// console.log(china3);

// Lecture: Functions Calling Other Functions
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}
// console.log(describePopulation('USA', 321));

// Lecture: Introduction to Arrays
const population = [321, 1441, 32, 721];
// population.length === 4 ? console.log(true) : console.log(false);

const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])];
// console.log(percentages);

// Lecture: Basic Array Operations (Methods)
const neighbours = ['Mexico', 'Canada', 'Ocean'];
neighbours.push('Utopia');
neighbours.pop();
// neighbours.includes('Germany') ? true : console.log('Probably not a central European country.');
neighbours[neighbours.indexOf('Mexico')] = 'Republic of Mexico';
// console.log(neighbours);

// Lecture: Introduction to Objects
const myCountry = {
    country: 'USA',
    capital: 'Washington D.C.',
    language: 'English',
    population: 321,
    neighbours: [],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};
// console.log(myCountry);

// Lecture: Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
// console.log(myCountry.population);
myCountry['population'] -= 2;
// console.log(myCountry.population);

// Lecture: Object Methods
/* Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword. Call the 'describe' method
Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
// myCountry.describe();
myCountry.checkIsland();
// console.log(myCountry);

// Lecture: Iteration: The For Loop
// for (let voter = 1; voter <= 50; voter++) console.log(`Voter number ${voter} is currently voting`);

// Lecture: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < population.length; i++) {
    percentages2.push(percentageOfWorld2(population[i]));
}
// console.log(percentages2);

// Lecture: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico',], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        // console.log(listOfNeighbours[i][j]);
    }
}

// Lecture: The While Loop
const percentages3 = [];
let i = 0;
while (i < population.length) {
    percentages3.push(percentageOfWorld2(population[i]));
    i++;
}
// console.log(percentages3);