"use strict";
//tsc main.ts to compile once
//tsc main.ts -w compile again nad again
// tsc --init
// set rootDir to ./src
// set outDir to ./build/js
// use tsc -w in console 
// add in last 
// "include": [
//     "src"
//   ]
console.log("Hello World");
console.log("Hey");
let a = 12;
let b = 6;
let c = 2;
let d = '56';
console.log(a / b);
console.log(c * b);
// ***************************************************Basic Types************************************************************
let myName;
let meaningOfLife;
let isLoading;
let album; //Union Type
myName = "Anurag";
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen';
console.log(myName);
console.log(meaningOfLife);
console.log(isLoading);
console.log(album);
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
/*

In TypeScript, the regular expression `/\w+/g` can be broken down as follows:

### Components of the Regular Expression:
1. **`/\w+/`**:
   - **`\w`**: This is a shorthand character class that matches any word character. A word character includes:
     - Any alphanumeric character (letters `a-z`, `A-Z`, digits `0-9`).
     - The underscore (`_`).
   - **`+`**: Matches one or more occurrences of the preceding token (`\w` in this case). So it will match one or more consecutive word characters.
   
2. **`g`**:
   - This is the **global flag**. It ensures that the regular expression will find **all matches** in the input string, not just the first one.

### Example Usage in TypeScript:
Here’s how you might use this regular expression in TypeScript:

```typescript
const regex = /\w+/g;
const text = "Hello, TypeScript! Let's learn regex.";
const matches = text.match(regex);

console.log(matches);
// Output: ['Hello', 'TypeScript', 'Let', 's', 'learn', 'regex']
```

### Explanation of the Example:
1. The `text.match(regex)` method finds all matches in the string `text` that conform to the pattern `\w+`.
2. The `g` flag ensures all matching substrings (`Hello`, `TypeScript`, `Let`, etc.) are returned as an array.

### Notes:
- If the `g` flag is not used, `text.match(regex)` will return only the first match or `null` if there’s no match.
- In TypeScript, you get type safety, so the return type of `match` is `(string | null)[]`, and you might want to check for `null` to avoid runtime errors.

*/
/////////////////////////////Arrays*Tuple///////////////////////////////////////////////////
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = [true, "EVH", 5125];
stringArr[0] = 'John';
// stringArr.push(42); //not assignable
guitars[0] = 1984;
guitars.unshift("Jim");
// stringArr = guitars  //This is not assignable
guitars = stringArr; //This is assignable
let test = [];
let bands = []; //Assign array in ts
bands.push('Van Halen');
//Tuple
let myTuple = ["Dave", 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed //It giving error because it is possible that mixed don't have three element
myTuple[1] = 42; //This is the only index where we put number
//Object
let myObj;
myObj = []; //This is possible because array has return type object
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true
};
// exampleObj.prop2 = "John" //This is not possible as it type is boolean
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    // active:false, if we remove that we get an error as we have to define all the properties
    albums: [1984, 5150, "OU812"]
};
console.log(evh);
// let jp = {
//   name:"Jimmy",
//   // active:true,
//   albums:["I","II","IV"]
// }
// evh = jp //both have not the same type
let jp = {
    // name:"Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
let jimmy = {
    name: "Jimmy",
    albums: ["I", "II", "IV"]
};
// evh = jimmy //now both are same
//Function
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
//if we use  ? on name some people may not give name so the return type is undefined for that we use 
const greetGuitarist1 = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!!';
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist1(jp));
//Enums 
//Unlike most TypeScript features Enums are not a type-level addition to JAvascript but Something 
// added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
