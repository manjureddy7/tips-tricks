------ Lets try to create an ARRAY from an Object Values -----
  
  Expected: Array["name","age"] with given Object {name:"name",age:"age"}

Two ways we can get Values of an Obj by Object.values(obj)

Other way is first get the keys of an Obj & then with got keys array map over and find values

const datakeys = Object.keys(obj);
const dataValues = dataKeys.map(header => obj[header]);

Now dataValues provides an array ["name","age"]


---------- mapping backend resposne -------
const bakendData = [{name: "Manoj", age:"26"},{}];

// We can't directly use backend data
// We need to modify the backend data somehow
// and modified data should be an array ["manoj", 26]

// From the above backend data, we need to make name to lowercase and age data type to number

const map = {
name: (name) => name.toLowerCase(),
age: (age) => +(age)
}

const modifiedBakcnedResponse = (backendData) => {
const backendData = backendData;
const finalData = [];
const keys = Object.keys(map);
backendData.forEach(data => {
keys.forEach(key => finalData.push(map[key](data[key])))

})
}
