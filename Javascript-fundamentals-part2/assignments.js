// Assignment #1

function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry('Finland', 6000000, 'Helsinki');
describeCountry('Brazil', 230000000, 'Brazilia');
describeCountry('Ireland', 5000000, 'Dublin');

// Assignment #2

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(1441);
const population2 = percentageOfWorld1(230);
const population3 = percentageOfWorld1(5);
console.log(population1, population2, population3)

const percentageOfWorld2 =  function (population) {
    return (population / 7900) * 100;
}

const population4 = percentageOfWorld2(1441);
const population5 = percentageOfWorld2(230);
const population6 = percentageOfWorld2(5);
console.log(population4, population5, population6);

// Assignment #3

const percentageOfWorld3 = population => (population / 7900) * 100;

const population7 = percentageOfWorld3(1441);
const population8 = percentageOfWorld3(230);
const population9 = percentageOfWorld3(5);
console.log(population7, population8, population9);

// Assignment #4

const describePopulation = function (country, population) {
    percentageOfWorld1(population);
    return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`);
}

const population10 = describePopulation('China', 1441);
const population11 = describePopulation('Brazil', 230);
const population12 = describePopulation('Ireland', 5);

// Assignment #5

const populations = [1441, 230, 5, 1];
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);

// Assignment #6

const neighbours = ['Argentina', 'Bolivia', 'Chile'];
console.log(neighbours);
neighbours.push('Venezuela');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('Argentina'));
neighbours[0] = 'Brazil';
console.log(neighbours);

// Assignment #7

const myCountry = {
    country: 'Brazil',
    capital: 'Brazilia',
    language: 'Portuguese',
    population: 2300,
    neighbours: ['Argentina', 'Bolivia', 'Chile']
};

console.log(myCountry)

// Assignment #8

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)
myCountry.population += 2;
console.log(myCountry.population);
myCountry.population -= 2;
console.log(myCountry.population);