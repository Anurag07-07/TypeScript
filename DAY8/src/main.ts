//Utility Types

// Partial

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignment = (assign:Assignment,propsToUpdate:Partial<Assignment>):Assignment =>{
  return {...assign,...propsToUpdate}
}

const assign1 :Assignment = {
  studentId:"compsci13",
  title:"Final Project",
  grade:0
}

console.log(updateAssignment(assign1,{grade:95}));
const assignGraded:Assignment = updateAssignment(assign1,{grade:95}) 


//Required and readonly
const recordAssignment = (assign:Required<Assignment>):Assignment =>{
  return assign
}

const assignVerified:Readonly<Assignment> = {
  ...assignGraded,verified:true
}

// assignVerified.grade = 88 //Beacuse this is readonly property

recordAssignment({...assignGraded,verified:true})

//Record Type
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
}

type Student = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"
const finalGrades:Record<Student,LetterGrades> = {
  Sara:'B',
  Kelly:'A'
}

interface Grades {
  assign1:number,
  assign2:number
}

const gradeData:Record<Student,Grades> = {
  Sara :{assign1:85,assign2:93},
  Kelly :{assign1:94,assign2:93}
}

//Pick and Omit
type AssignResult = Pick<Assignment,"studentId" | "grade">

const score :AssignResult = {
  studentId:"k123",
  grade:85
}
type AssignPreview = Omit<Assignment,"grade" | "verified">

const preview:AssignPreview = {
  studentId:"k123",
  title:"Final Project"
}

//Exclude and Extract
type adjustedGrade = Exclude<LetterGrades,"U">
type highGrade = Extract<LetterGrades,"A" | "B">

//Nonnullable Type 
type allPossibleGrades = "Dave" | "John" | null | undefined

type NameOnly = NonNullable<allPossibleGrades>  //It remove null and undefined

//Return Type

/*
type newAssign = {title:string,points:number}

const createNewAssign = (title:string,points:number):newAssign => {
  return {title,points}
}

*/

type newAssign = ReturnType<typeof createNewAssign>

const createNewAssign = (title:string,points:number) => {
  return {title,points}
}

const tsAssign:newAssign = createNewAssign("Utility Types",100)
console.log(tsAssign);

//Parameters

type  AssignParams = Parameters<typeof createNewAssign>

const assignArgs:AssignParams = ["Generics",100]

const tsAssign2:newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);


//Awaited helps us with the ReturnType of a Promise

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  )
    .then(res => {
      return res.json()
    })
    .catch(err => {
      if (err instanceof Error) console.log(err.message)
    })
  return data
}

type FetchUserReturnType = ReturnType<typeof fetchUsers> //We Don't want the promise as a result we want data
type FetchUserReturnType1 = Awaited <ReturnType<typeof fetchUsers>> //We Don't want the promise as a result we want data

fetchUsers().then(user=>console.log(user))