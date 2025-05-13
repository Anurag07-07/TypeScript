let username = "Anurag"
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

let a:number = 12;
console.log(a);
let b:string = 'a'
console.log(b);

// console.log(a/b); //It Don't work and give NaN because number can't be divided with string

// Typescript is Strongly Typed Language
let myName:string = "Anurag Raj"
console.log(myName);
let meaningOfLife:number = 22
console.log(meaningOfLife);
let album:any; //It is Used when we don't Know the Datatype
album = 2002
console.log(album);

///////Functions

const sum = (a:number,b:string)=>{
  return a+b
}
console.log(sum(9,"AJ"));

//Union Type
let value: string | number //It is used when we know that variable is either number or string
let isActive:number | boolean;
isActive = 1
console.log(isActive);
isActive = false
console.log(isActive);


//Regex Type
let reg:RegExp = /\w+/g
console.log(reg);

