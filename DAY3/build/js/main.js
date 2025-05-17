"use strict";
//Type Aliases is not applicable on interface
///////////////////////////////Literal Types///////////////////////////////
let Myname; //Now we can't change the name
Myname = "John"; //Not applicable
let name1; //No  oter name will be accepted in name1 variable
//////////////////////////////////////////////Functions//////////////////////////////////////
const add = (a, b) => a + b;
console.log(add(45, 56));
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(45, 5));
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//If c already has value defined 
//Default Parameter
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(45, 56));
logMsg(sumAll(undefined, 56));
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current, 0); //Here 0 is initial value of accumulator or sum
};
logMsg(total(1, 2, 3, 4, 5));
const total1 = (a, b, ...nums) => {
    return nums.reduce((prev, current) => prev + current, 0); //Here 0 is initial value of accumulator or sum
};
logMsg(total1(1, 2, 3, 4, 5));
//Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
console.log(createError);
//Endless loop or infinite also has return type 'never'
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
const infinite1 = () => {
    let i = 1;
    while (true) {
        i++;
        if (i === 100) {
            break;
        }
    }
};
//Custom Type Guard
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (isNumber(value)) {
        return 'number';
    }
    return createError('This Should Never Happen!');
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
console.log(isNumber(45));
