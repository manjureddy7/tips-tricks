--- Creating an array of Objects ---

Task: Create an Array of Objects with provided data.

Expected: myArray = [{name:"Manoj", age: 26}, {name:"Siri", age: 24}....]

Provided data = ("Manoj", 26), ("Siri", 24)

My first Initial thought of doing it ?

const myArray = [{name:"Manoj", age: 26}...] This is more manually creating every Obj within Array

Better Solution

createUser(name, age){
  return {name,age}
}

const myArray=[createUser("Manoj", 26), createUser("Siri", 24)]
