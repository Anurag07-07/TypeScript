"use strict";
//convert to more or less specific 
let a = 'hello';
let b = a; //less specific 
let c = a; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// let myVal:string = addOrConcat(2,2,'concat') //MyVal show error because this maybe a number also as function return type is number or string
// so that why we use
let myVal = addOrConcat(2, 2, 'concat'); //explicitly tell that return type is string
//Be careful! TS sees no problem - but a string is returned 
let nextVal = addOrConcat(2, 2, 'concat'); //explicitly tell that return type is number
// 10 as string
10; //we can't convert 10 directly into string so we first convert into unknown
/////////////////////////////////////////////////////DOM/////////////////////////////////////////////////
const img = document.querySelector('img');
const myImg = document.getElementById('#img'); //not null assertion it remove null return type
const nextImg = document.getElementById('#img'); //another way of writing but not work in React
img.src;
myImg.src;
//Assignment
// Original JS code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// 1st Variation
// let year:HTMLElement | null 
// year = document.getElementById("year");
// let thisYear:string
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear; 
// }
// 2nd Variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
