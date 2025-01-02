//tsc main.ts to compile once
//tsc main.ts -w compile again nad again
// tsc --init
// set rootDir to ./src
// set outDir to ./build/js
// use tsc -w in console 
// add in last 
// "include": [
//     "src"
//   ]

console.log("Hello World");
console.log("Hey");

let a:number = 12
let b:number = 6
let c:number = 2;
let d:string = '56';

console.log(a/b);
console.log(c*b);

// ***************************************************Basic Types************************************************************

let myName:string;
let meaningOfLife:number;
let isLoading:boolean;
let album:string | number; //Union Type

myName = "Anurag"
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen'

console.log(myName);
console.log(meaningOfLife);
console.log(isLoading);
console.log(album);

const sum = (a:number,b:string) =>{
  return a+b;
}

let postId: string | number
let isActive: number | boolean 

let re = /\w+/g;

/*

In TypeScript, the regular expression `/\w+/g` can be broken down as follows:

### Components of the Regular Expression:
1. **`/\w+/`**:
   - **`\w`**: This is a shorthand character class that matches any word character. A word character includes:
     - Any alphanumeric character (letters `a-z`, `A-Z`, digits `0-9`).
     - The underscore (`_`).
   - **`+`**: Matches one or more occurrences of the preceding token (`\w` in this case). So it will match one or more consecutive word characters.
   
2. **`g`**:
   - This is the **global flag**. It ensures that the regular expression will find **all matches** in the input string, not just the first one.

### Example Usage in TypeScript:
Here’s how you might use this regular expression in TypeScript:

```typescript
const regex = /\w+/g;
const text = "Hello, TypeScript! Let's learn regex.";
const matches = text.match(regex);

console.log(matches);
// Output: ['Hello', 'TypeScript', 'Let', 's', 'learn', 'regex']
```

### Explanation of the Example:
1. The `text.match(regex)` method finds all matches in the string `text` that conform to the pattern `\w+`.
2. The `g` flag ensures all matching substrings (`Hello`, `TypeScript`, `Let`, etc.) are returned as an array.

### Notes:
- If the `g` flag is not used, `text.match(regex)` will return only the first match or `null` if there’s no match.
- In TypeScript, you get type safety, so the return type of `match` is `(string | null)[]`, and you might want to check for `null` to avoid runtime errors.

*/