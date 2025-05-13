"use strict";
let username = "Anurag";
console.log(username);
// npm i  -g typescript
// tsc main.ts for compile
// tsc --init for ts.config
// change rootDir to src
// and outDir to build/js
//tsc -w
// ,
//   "include": [
//     "src"
//   ] add this in last of tsconfig file
// to run npx tsc -w
///////////////////////////Basic/////////////////////////////////////////////
let a = 12;
console.log(a);
let b = 'a';
console.log(b);
// console.log(a/b); //It Don't work and give NaN because number can't be divided with string
// Typescript is Strongly Typed Language
let myName = "Anurag Raj";
console.log(myName);
let meaningOfLife = 22;
console.log(meaningOfLife);
let album; //It is Used when we don't Know the Datatype
album = 2002;
console.log(album);
///////Functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(9, "AJ"));
//Union Type
let value; //It is used when we know that variable is either number or string
let isActive;
isActive = 1;
console.log(isActive);
isActive = false;
console.log(isActive);
//Regex Type
let reg = /\w+/g;
console.log(reg);
