//Type Assertions
type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific 
let a:One = 'hello'
let b = a as Two //less specific 
let c = a as Three //more specific

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a:number,b:number,c:'add' | 'concat'):number | string => {
  if (c === 'add') {
    return a+b
  }
  return ''+a+b
}

// let myVal:string = addOrConcat(2,2,'concat') //MyVal show error because this maybe a number also as function return type is number or string
// so that why we use
let myVal:string = addOrConcat(2,2,'concat') as string //explicitly tell that return type is string

//Be careful! TS sees no problem - but a string is returned 
let nextVal:number = addOrConcat(2,2,'concat') as number //explicitly tell that return type is number

// 10 as string
(10 as unknown) as string //we can't convert 10 directly into string so we first convert into unknown


/////////////////////////////////////////////////////DOM/////////////////////////////////////////////////
const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img')! as HTMLImageElement //not null assertion it remove null return type
const nextImg = <HTMLImageElement>document.getElementById('#img') //another way of writing but not work in React
img.src
myImg.src

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
const year = document.getElementById("year") as HTMLElement;
const thisYear:string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear; 