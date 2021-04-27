------ Convert an Object into string -----
  
  Expectations : Given an Obj convert it into string in the formart of "key1:value1;key2:value2"

Solution:

const convertObjIntoString = (toBeConvertedObj = {}) => {
// Now we have an Object, we want to reduce it to single string
// But how to reduce an Obj as Object doesn't have any reduce method , but array has right?
// Idea -> Convert Object into Array then reduce

  // How to convert an Object to Array
  const myArray = Object.entries(toBeConvertedObj); // this will give [["key1","value1"],["key2","value3"]]
  const singleString = myArray.reduce(reducerFN, initialValue)
   // first arg will be intial value and second argument will be the element in the array in our case element is again an array with ["key","value") 
  const reduerFN = (initialValue, [key,value]) => `${initialValue}${key}:${value}`
  // This reducer fn will act up on each elemnt and reduce it to our liking
  // Keep in mind reducer is always similar to MAP, here also it takes each element from the array then do its operation and pass this value as 
  // first argument to the second element and it goes on

}
