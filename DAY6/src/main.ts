//Index Signatures is used when we know the key Object but don't know the Key of the Objects

// interface TransactionObj {
//   Pizza:number,
//   Books:number,
//   Job:number
// }

// interface TransactionObj {
//   //Index Signature
//   //[index:string]:number  //All Key are string and all Value is Number
//   readonly [index:string]:number  //All Key are string and all Value is Number and we can't change the value now as it is readonly now
// }

interface TransactionObj {
  readonly [index:string]:number  //All Key are string and all Value is Number and we can't change the value now as it is readonly now
  Pizza:number,
  Books:number,
  Job:number
}

const todaysTransactions:TransactionObj ={
  Pizza:-10,
  Books:-5,
  Job:10
}

//Statically Calling
console.log(todaysTransactions['Pizza']);

//Dynmically Calling
let props:string = 'Pizza'
console.log(todaysTransactions[props]); //This Gives Error till we don't define second Interface 

const todaysNet = (transactions:TransactionObj)=>{
  let total = 0;
  for (const  transaction in transactions) {
    total+=transactions[transaction] //This Gives Error we don't define second Interface
  }
  return total
}

// todaysTransactions['Pizza'] = 40 //This Gives Error Because Obj is in readonly Mode
// console.log(todaysTransactions['Anurag']); //This Don't Give Error as we don't defined the key for that we use interface three
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Student {
  [key:string]:string | number | number[] | undefined
  name:string,
  GPA:number,
  classes?:number[]
}

const student:Student = {
  name:"Anurag",
  GPA:7.8,
  classes:[100,200]
}

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key=>{
  console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student:Student,key:keyof Student):void =>{
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student,'GPA')
logStudentKey(student,'name')


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key:string]:number //Here We Don't Specifically that my Keys is This or This
// }

type Streams = 'salary'|'bonus'|'sidehustle'
type Incomes = Record<Streams,number | string >

const monthlyIncomes:Incomes = {
  salary:500,
  bonus:100,
  sidehustle:250
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}

/*



Let's go through your TypeScript code **line by line**, with detailed explanation:

---

### Interface Definition

```ts
interface Student {
  [key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}
```

* This defines an interface `Student`.
* The line `[key: string]: string | number | number[] | undefined` is an **index signature**, which says the object can have **any string key** with a value of type `string`, `number`, `number[]`, or `undefined`.
* Then, specific properties are defined:

  * `name`: must be a string.
  * `GPA`: must be a number.
  * `classes?`: an optional property (indicated by `?`) that, if present, must be an array of numbers.

---

### Creating a `student` object

```ts
const student: Student = {
  name: "Anurag",
  GPA: 7.8,
  classes: [100, 200]
}
```

* This creates a constant `student` of type `Student`.
* The object matches the interface:

  * `name` is a string.
  * `GPA` is a number.
  * `classes` is an optional array of numbers and is provided.

---

### Iterating using `for...in`

```ts
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
```

* `for...in` iterates over all enumerable keys in the `student` object.
* `key` is of type `string`, so to access values safely from `student`, we cast the key: `key as keyof Student`.
* `keyof Student` is a union type: `"name" | "GPA" | "classes" | string`, so TypeScript understands it's a valid property of `student`.
* Inside the loop, it logs each key and its value.

---

### Using `Object.keys()` and `map`

```ts
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
})
```

* `Object.keys(student)` returns an array of keys from the `student` object (as strings).
* `map()` is used to iterate over them.
* Each `key` is cast as `keyof typeof student` to safely access the value using `student[key]`.
* This also logs each value.

> Note: This and the `for...in` loop do the same thing in practice.

---

### Function to log a specific student property

```ts
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}
```

* This defines a function `logStudentKey`.
* Parameters:

  * `student`: an object of type `Student`.
  * `key`: must be a key of the `Student` interface (`"name" | "GPA" | "classes"`).
* Inside the function, it logs: `Student key: value`.

---

### Function Calls

```ts
logStudentKey(student, 'GPA')
logStudentKey(student, 'name')
```

* These lines call the function `logStudentKey`:

  * First with the key `'GPA'`, so it logs: `Student GPA: 7.8`
  * Then with `'name'`, so it logs: `Student name: Anurag`

---

### Summary

Your code demonstrates:

1. How to define a flexible interface using index signatures.
2. How to safely iterate over object keys with proper TypeScript type casting.
3. How to use `keyof` to create a type-safe utility function for accessing object properties.

Let me know if you want this in Hindi or with a diagram!











Let's break this line-by-line:

```ts
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
})
```

This code is used to loop over the properties of the `student` object and print their values.

---

### ✅ Step-by-step Explanation

#### 1. `Object.keys(student)`

* This gets an array of all **own enumerable string keys** of the `student` object.
* For example, if `student = { name: "Anurag", GPA: 7.8, classes: [100, 200] }`, then:

  ```ts
  Object.keys(student) // => ["name", "GPA", "classes"]
  ```

#### 2. `.map(key => { ... })`

* This is calling `.map()` on the array `["name", "GPA", "classes"]`.
* It iterates over each key and executes the function `key => { ... }`.

#### 3. `key as keyof typeof student`

* By default, `key` is just a `string`, but `student[key]` will cause a TypeScript error, because TypeScript doesn't know if the key exists in the object.
* So we use a **type assertion**: `key as keyof typeof student`

  * `typeof student` is the **actual type of the `student` object**.
  * `keyof typeof student` is a **union of its keys**, i.e., `"name" | "GPA" | "classes"`.

#### 4. `console.log(student[key as keyof typeof student])`

* Now that TypeScript knows the key is valid, it lets us safely access `student[key]` and logs the value.

---

### 🔎 What gets printed?

For your object:

```ts
const student = {
  name: "Anurag",
  GPA: 7.8,
  classes: [100, 200]
}
```

This code logs:

```
Anurag
7.8
[100, 200]
```

---

### ❓ Why not just `student[key]`?

Because `key` is of type `string`, and TypeScript doesn't allow accessing object properties with just any string unless you **tell it** the key is a valid one. That’s what `key as keyof typeof student` does—it tells TypeScript:

> “Trust me, this key really exists on the object.”

---

### ✅ Summary

| Part                          | Meaning                                                  |
| ----------------------------- | -------------------------------------------------------- |
| `Object.keys(student)`        | Get array of keys from the object                        |
| `.map(key => { ... })`        | Loop through each key                                    |
| `key as keyof typeof student` | Tell TypeScript: "This key exists on the student object" |
| `student[key]`                | Safely access the value of each property                 |

Let me know if you'd like a visual diagram or Hindi explanation.







Great question!

### 🔄 Can you use `keyof Student` instead of `keyof typeof student`?

Let’s look at the difference clearly:

---

### ✅ YES, you **can** use `keyof Student`, but there is a key difference:

#### ✅ 1. Using `keyof Student`

```ts
Object.keys(student).map(key => {
  console.log(student[key as keyof Student]);
});
```

* This tells TypeScript: "`key` is one of the keys defined in the **Student interface**."
* Works fine **if `student` exactly follows the `Student` interface**.
* BUT: It includes all keys from the interface, **even optional ones**, and **possibly others if index signature is used**.

---

#### ✅ 2. Using `keyof typeof student`

```ts
Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
});
```

* This tells TypeScript: "`key` is one of the keys of this **specific object instance** `student`."
* Safer if the object was dynamically built or contains extra properties not in the `Student` interface.

---

### 🧠 Real-world example

Let's say your interface looks like this:

```ts
interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}
```

And your object is:

```ts
const student = {
  name: "Anurag",
  GPA: 7.8,
  classes: [100, 200],
  extraProp: "hello" // not in interface
}
```

* `keyof Student` = `"name" | "GPA" | "classes"`
* `keyof typeof student` = `"name" | "GPA" | "classes" | "extraProp"`

So:

* If you're **strictly accessing only interface-defined properties**, use `keyof Student`.
* If you're accessing the **actual object keys**, including any extra ones, use `keyof typeof student`.

---

### ✅ Conclusion

| You Want To...                                   | Use                    |
| ------------------------------------------------ | ---------------------- |
| Work with only what’s in the `Student` interface | `keyof Student`        |
| Work with actual keys in the object              | `keyof typeof student` |

Both are valid — your choice depends on the use case.

Let me know if you want a diagram or need it explained in Hindi!






*/