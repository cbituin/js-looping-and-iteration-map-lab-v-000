// Code your solution in this file.

const lowerCaseDrivers = (arr) => {
  return arr.map(val => val.toLowerCase());
};

function splitStrings(arr) {
  return arr.map(val => val.split(" "));
} 

const nameToAttributes = (arr) => {
  arr.map(val => {
    let newObj = {};
    newObj.firstname = val[0];
    newObj.lastname = val[1];
    return newObj;
  });
};