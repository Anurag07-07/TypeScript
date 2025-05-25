"use strict";
//Class
class Coder {
    // Property and Methods Called Members
    // secondLang ! =   string //It means we are not intializing
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age; //Only accessible inside this class
        this.lang = lang; //accessible inside sub class and this class
    }
    getAge() {
        return `Hello I'm ${this.age} years old`;
    }
}
//The Data which is inside Constructor will also be inside class first
const Anurag = new Coder("Anurag", "Sofi", 22);
console.log(Anurag.getAge());
// console.log(Anurag.age);
// console.log(Anurag.lang);
// What is diff between private and protected 
// protected can access inside the class but it can access inside the derived classes
// private can access inside the particular class only
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
//Directly apply on class
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Arman Mallick', "John Durran"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
