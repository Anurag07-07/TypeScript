"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Lrs pAul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
// stringArr.push(42) //Type Number is Not Assignable to type String
//Guitar array accept number and String
guitars[0] = 1984;
guitars.unshift('Cody');
//Mixed data accept number boolean string
mixedData = guitars;
// guitars = mixedData //This not work beacuse mixed data can contains number string boolean while guitar contain number and string only
//Create Empty Array
let bands = [];
bands.push('Van Halen');
//Tuple for more strictness and postion strictness to
let myTuple = ['Anurag', 22, true];
let mixed = ['John', 42, false];
mixed = myTuple; //This is correct but visa versa is not true
// myTuple = mixed // beacause mixed has possiblilty that it has less than three element
// myTuple[0] = false //This is also not correct because at zero postion we store string only
///////////////// Objects
let MyObj;
MyObj = []; //This is correct because array is an Object
MyObj = {}; //This is also true
const exampleObj = {
    prop1: 'Anurag',
    prop2: true
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = JP; //Both are equal until I don't remove any property
// evh.years //we can't add any property also
// If apply question mark than maybe both are Equal after removal of question mark property
const greetGuitarist = (guitarist) => {
    if (!guitarist['name']) {
        return `The Name is Not Defined`;
    }
    return `Hello ${guitarist['name'].toUpperCase()}`;
};
const Greeting = greetGuitarist(JP);
console.log(Greeting);
//Enums 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 54] = "U";
    Grade[Grade["D"] = 55] = "D";
    Grade[Grade["C"] = 56] = "C";
    Grade[Grade["B"] = 57] = "B";
    Grade[Grade["A"] = 58] = "A"; //We can start with any value
})(Grade || (Grade = {}));
console.log(Grade['U']);
console.log(Grade['B']);
console.log(Grade['A']);
