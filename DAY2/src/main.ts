let stringArr = ['one','two','three']
let guitars = ['Strat','Lrs pAul',5150]
let mixedData = ['EVH',1984,true]

stringArr[0] = 'John'
// stringArr.push(42) //Type Number is Not Assignable to type String

//Guitar array accept number and String
guitars[0] = 1984
guitars.unshift('Cody')

//Mixed data accept number boolean string
mixedData = guitars
// guitars = mixedData //This not work beacuse mixed data can contains number string boolean while guitar contain number and string only

//Create Empty Array
let bands:string[] = []
bands.push('Van Halen')

//Tuple for more strictness and position strictness to

let myTuple:[string,number,boolean] = ['Anurag',22,true]

let mixed = ['John',42,false] 

mixed = myTuple //This is correct but visa versa is not true
// myTuple = mixed // beacause mixed has possiblilty that it has less than three element

// myTuple[0] = false //This is also not correct because at zero postion we store string only

///////////////// Objects

let MyObj:object;
MyObj = []  //This is correct because array is an Object
MyObj = {}  //This is also true


const exampleObj = {
  prop1:'Anurag',
  prop2:true
}
// exampleObj['prop1'] = 42 //This is not work because object is also work like Tuple 

type Guitarist = {
  name:string,
  active?:boolean,  //Question symbol is used to make any property Optional
  albums:(string|number)[]
}

//We can also use interface also

interface Guitarist1{
  name:string,
  active?:boolean,  //Question symbol is used to make any property Optional
  albums:(string|number)[]
}

let evh:Guitarist = {
  name:"Eddie",
  active:false,
  albums:[1984,5150,'OU812']
}

let JP:Guitarist ={
  name:"Jimmy",
  active:true,
  albums:['I','II','IV']
}

evh = JP  //Both are equal until I don't remove any property
// evh.years //we can't add any property also
// If apply question mark than maybe both are Equal after removal of question mark property

const greetGuitarist = (guitarist:Guitarist)=>{
  if (!guitarist['name']) {
    return `The Name is Not Defined`
  }
  return `Hello ${guitarist['name'].toUpperCase()}` 
}

const Greeting = greetGuitarist(JP)
console.log(Greeting);

//Enums 
enum Grade {
  U=54,D,C,B,A  //We can start with any value
}
console.log(Grade['U']);
console.log(Grade['B']);
console.log(Grade['A']);