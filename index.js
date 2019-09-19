// Code your solution in this file.

const lowerCaseDrivers = (arr) => {
  return arr.map(val => val.toLowerCase());
};

const nameToAttributes = (arr) => {
    // let newArr = arr.map(val => val.split(" "));
  
    newArr.map(val => {
    val.split(" ");
    let newObj = {};
    newObj.firstname = val[0];
    newObj.lastname = val[1];
    console.log(newObj);
  });
};