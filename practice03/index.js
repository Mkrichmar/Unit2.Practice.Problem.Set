console.log('Hello World!');

colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple'
];

console.log(colors);

let firstColor = colors.shift();

console.log(firstColor);

let lastColor = colors.pop();

console.log(lastColor);

console.log(colors);

colors.push('pink');

console.log(colors);

colors.unshift('brown');

console.log(colors);

let newColors = colors.slice(1,4);

console.log(newColors);

let str = newColors.join('');

console.log(str);

let colorsCopy = [...colors];

console.log(colorsCopy);

const person = {
    name: 'Matt',
    age: 37,
    favoriteColors: [...colors],
};

console.log(person);

let name = person.name;

let age = person.age;

let favoriteColors = person.favoriteColors;

console.log(name,age,favoriteColors);

person.favoriteFood = 'pizza';

console.log(person);

delete person.favoriteColors;

console.log(person);

let newPerson = {...person};

console.log(newPerson);

newPerson.name = 'Rachel';

newPerson.age = 39;

console.log(person,newPerson);

let thirdPerson = {};

Object.assign(thirdPerson,newPerson);

console.log(thirdPerson);

function objectName(Object) {
    return Object.name;
}

console.log(objectName(thirdPerson));
