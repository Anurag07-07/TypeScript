"use strict";
//Index Signatures is used when we know the key Object but don't know the Key of the Objects
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 10
};
//Statically Calling
console.log(todaysTransactions['Pizza']);
//Dynmically Calling
let props = 'Pizza';
console.log(todaysTransactions[props]); //This Gives Error till we don't define second Interface 
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; //This Gives Error we don't define second Interface
    }
    return total;
};
const student = {
    name: "Anurag",
    GPA: 7.8,
    classes: [100, 200]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
