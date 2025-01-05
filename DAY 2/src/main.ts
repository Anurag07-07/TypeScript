/////////////////////////////Arrays*Tuple///////////////////////////////////////////////////


let stringArr = ["one","two","three"]

let guitars = ["Strat","Les Paul",5150]

let mixedData =  [true,"EVH",5125]


stringArr[0] = 'John'
// stringArr.push(42); //not assignable

guitars[0] = 1984
guitars.unshift("Jim")

// stringArr = guitars  //This is not assignable
guitars = stringArr //This is assignable

let test = []
let bands: string[] = [] //Assign array in ts
bands.push('Van Halen')

//Tuple
let myTuple : [string,number,boolean] = ["Dave",42,true]
let mixed = ['John',1,false]
mixed = myTuple
// myTuple = mixed //It giving error because it is possible that mixed don't have three element
myTuple[1] = 42 //This is the only index where we put number


//Object
let myObj:object
myObj = [] //This is possible because array has return type object
console.log(typeof myObj);

myObj = bands
myObj={}

const exampleObj = {
  prop1:"Dave",
  prop2:true
}

// exampleObj.prop2 = "John" //This is not possible as it type is boolean
exampleObj.prop2 = false

//Type

type Guitarist1 = {
  name?:string,
  active?:boolean, //to make active property optional we make using ?
  albums:(string|number)[]
}

//We can use interface also

interface Guitarist2{
  name:string,
  active?:boolean, //to make active property optional we make using ?
  albums:(string|number)[]
}



let evh:Guitarist1 = {
  name:"Eddie",
  // active:false, if we remove that we get an error as we have to define all the properties
  albums:[1984,5150,"OU812"]
}

console.log(evh);

// let jp = {
//   name:"Jimmy",
//   // active:true,
//   albums:["I","II","IV"]
// }

// evh = jp //both have not the same type

let jp:Guitarist1 = {
  // name:"Jimmy",
  active:true,
  albums:["I","II","IV"]
}

let jimmy:Guitarist1 = {
  name:"Jimmy",
  albums:["I","II","IV"]
}

// evh = jimmy //now both are same

//Function

const greetGuitarist = (guitarist:Guitarist1)=>{
  return `Hello ${guitarist.name}!`
}

//if we use  ? on name some people may not give name so the return type is undefined for that we use 

const greetGuitarist1 = (guitarist:Guitarist1)=>{
  if (guitarist.name){
  return `Hello ${guitarist.name?.toUpperCase()}!`
  }
  return 'Hello!!'
}

console.log(greetGuitarist(evh));
console.log(greetGuitarist1(jp));

//Enums 
//Unlike most TypeScript features Enums are not a type-level addition to JAvascript but Something 
// added to the language and runtime

enum Grade {
  U=1, //we we can't defined it start with 0
  D,
  C,
  B,
  A
}

console.log(Grade.U);
