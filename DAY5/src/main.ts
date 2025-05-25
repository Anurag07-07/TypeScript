//Class
class Coder {
  // Property and Methods Called Members

  // secondLang ! =   string //It means we are not intializing

  constructor(public readonly  name:string, public music:string, private age:number, protected lang:string = 'TypeScript')
  {
    this.name = name
    this.music = music
    this.age = age  //Only accessible inside this class
    this.lang = lang  //accessible inside sub class and this class
  }

  public getAge(){
    return `Hello I'm ${this.age} years old`
  }
}
//The Data which is inside Constructor will also be inside class first

const Anurag = new Coder("Anurag","Sofi",22)
console.log(Anurag.getAge());
// console.log(Anurag.age);
// console.log(Anurag.lang);


// What is diff between private and protected 
// protected can access inside the class but it can access inside the derived classes
// private can access inside the particular class only

class WebDev extends Coder{
  constructor(public computer:string,name:string,music:string,age:number) {
    super(name,music,age)
    this.computer = computer
  }

  public getLang(){
    return `I write ${this.lang}`
  }
}

const Sara = new WebDev('mac','Sara','Lofi',25)
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Musician {
  name:string,instrument:string,play(action:string):string
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name:string,instrument:string){
    this.name = name
    this.instrument = instrument
  }

  play(action: string): string {
      return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy','guitar')
console.log(Page.play('strums'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Peeps {
  //Directly apply on class
  static count:number = 0
  
  static getCount():number{
    return Peeps.count
  }

  public id:number

  constructor (public name:string){
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);

console.log(Peeps.count);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
class Bands {
  private dataState:string[]

  constructor() {
    this.dataState = []
  }

  public get data():string[]{
    return this.dataState
  }

  public set data(value:string[]){
    if (Array.isArray(value) && value.every(el=> typeof el === 'string')) {
      this.dataState = value
      return
    }
    else throw new Error('Param is not an array of strings')
  }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young','Arman Mallick',"John Durran"]
console.log(MyBands.data);
MyBands.data = [...MyBands.data,'ZZ Top']
console.log(MyBands.data);