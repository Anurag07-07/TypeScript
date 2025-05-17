//Type Aliases
type stringNumber = string | number
type stringNumberArray = (string | number)[]

type Guitarist = {
  name?:string,
  active:boolean,
  albums:stringNumberArray
}

type UserID = stringNumber

//Type Aliases is not applicable on interface

///////////////////////////////Literal Types///////////////////////////////
let Myname:'Dave' //Now we can't change the name
Myname = "John" //Not applicable

let name1: 'Anurag' | 'Aniket' | 'Aditya' //No  oter name will be accepted in name1 variable

//////////////////////////////////////////////Functions//////////////////////////////////////

const add = (a:number,b:number)=> a+b
console.log(add(45,56));

const logMsg = (message:any):void => {  //Void is return Type here
  console.log(message);
}
logMsg('Hello')

let subtract = function(c:number,d:number):number{ //Number is return Type
  return c-d
}
console.log(subtract(45,5));

//Type Aliases
// type mathFunction = (a:number,b:number)=>number

interface mathFunction {
  (a:number,b:number):number
}  //This is inteface for math Function

let multiply:mathFunction = function(c,d) {
  return c*d
}
logMsg(multiply(2,2))

//Optional Parameters

const addAll = (a:number,b:number,c?:number):number=>{
  if (typeof c !== 'undefined') {
    return a+b+c
  }
  return a+b
}
//If c already has value defined 
//Default Parameter
const sumAll = (a:number=10,b:number,c:number=2):number=>{
  return a+b+c
}
logMsg(sumAll(45,56))
logMsg(sumAll(undefined,56)) 

//Rest Parameters

const total = (...nums:number[]):number => {
  return nums.reduce((prev,current)=>prev+current,0)  //Here 0 is initial value of accumulator or sum
}
logMsg(total(1,2,3,4,5))

const total1 = (a:number,b:number,...nums:number[]):number => {   //nums array contain all value except first two
  return nums.reduce((prev,current)=>prev+current,0)  //Here 0 is initial value of accumulator or sum
}
logMsg(total1(1,2,3,4,5))

//Never Type
const createError = (errMsg:string):never=>{
  throw new Error(errMsg)
}
console.log(createError);

//Endless loop or infinite also has return type 'never'


const infinite = ()=>{
  let i:number = 1
  while (true) {
    i++
  }
}

const infinite1 = ()=>{
  let i:number = 1
  while (true) {
    i++
    if (i===100) {
      break
    }
  }
}

//Custom Type Guard
const numberOrString = (value:number|string):string => {
  if (typeof value === 'string') {
    return 'string'
  }
  if (isNumber(value)) {
    return 'number'
  }
  return createError('This Should Never Happen!')
}

const isNumber = (value:any):boolean =>{
  return typeof value==='number'? true : false
}
console.log(isNumber(45));