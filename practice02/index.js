console.log('Hello World');

/* first we will need to determine the temperature at which a person should wear a jacket;
then we need to create a variable to hold the current temperature;
then we need to pass that variable into a function that evaluates;
a conditional if else expression determining whether to return a message of 'jacket' or 'no jacket' */


let currentTemp = 36;

let isRaining = false;

if (currentTemp <= 40) {
    console.log(`It's ${currentTemp} degrees outside! Wear a heavy jacket.`)
} else if (currentTemp <= 60) {
    console.log(`It's ${currentTemp} degrees outside. Wear a jacket.`);
} else if (currentTemp < 70) {
    console.log(`It's ${currentTemp} degrees outside. Wear a light jacket`);
} else {
    console.log(`It's hot out today! No need to wear a jacket!`);
}

if (isRaining === true) {
    console.log('It’s raining, too, so you should bring an umbrella!');
} else {
    console.log('No rain today, you can leave the umbrella at home!');
}

isRaining ? console.log('It’s raining, too, so you should bring an umbrella!') 
: console.log('No rain today, you can leave the umbrella at home!');

function whatToWear(currentTemp,isRaining) {
    let jacketWeather = '';

    if (currentTemp <= 40) {
        jacketWeather = (`It's ${currentTemp} degrees outside! Wear a heavy jacket.`)
    } else if (currentTemp <= 60) {
        jacketWeather = (`It's ${currentTemp} degrees outside. Wear a jacket.`);
    } else if (currentTemp < 70) {
        jacketWeather = (`It's ${currentTemp} degrees outside. Wear a light jacket.`);
    } else {
        jacketWeather = (`It's hot out today! No need to wear a jacket!.`);
    }

    let umbrellaWeather = '';

    isRaining ? 
        umbrellaWeather = ('It’s raining, too, so you should bring an umbrella!')
    :
        umbrellaWeather = ('No rain today, you can leave the umbrella at home!')
    

    return (`${jacketWeather} ${umbrellaWeather}`);
}

console.log(whatToWear(23,false));

let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello, guest!');


const inputNum1 = prompt('Enter an integer', 3);
const inputOperator = prompt ('Enter an operator +,-,*,/,pow','+');
const inputNum2 = prompt ('Enter another integer', 15);


let num1 = parseInt(inputNum1);
let num2 = parseInt(inputNum2);
let operator = inputOperator;

const add = (num1 + num2);

const subtract = (num1 - num2);

const multiply = (num1 * num2);

const divide = (num1 / num2);



if (operator === '+') {
    console.log(`The sum of ${num1} and ${num2} is ${add}.`);
} else if (operator === '-') {
    console.log(`The difference between ${num1} and ${num2} is ${subtract}.`);
} else if (operator ==='*') {
    console.log(`The product of ${num1} and ${num2} is ${multiply}.`); 
} else if (operator === '/') {
    console.log(`The quotient of ${num1} and ${num2} is ${divide}.`);
} else if (operator === 'pow' || inputOperator === 'exp') {
    console.log(`${num1} to the power of ${num2} is equal to ${Math.pow(num1,num2)}`);
} else {
    console.log('The operator is invalid');
};


function calculator(num1,num2,operator) {
    if (operator === '+') {
        return (`The sum of ${num1} and ${num2} is ${add}.`);
    } else if (operator === '-') {
        return (`The difference between ${num1} and ${num2} is ${subtract}.`);
    } else if (operator ==='*') {
        return (`The product of ${num1} and ${num2} is ${multiply}.`); 
    } else if (operator === '/') {
        return (`The quotient of ${num1} and ${num2} is ${divide}.`);
    } else if (operator === 'pow' || inputOperator === 'exp') {
        return (`${num1} to the power of ${num2} is equal to ${Math.pow(num1,num2)}`);
    } else {
        return ('The operator is invalid');
    };
}

console.log(calculator(4,5,'pow')); 