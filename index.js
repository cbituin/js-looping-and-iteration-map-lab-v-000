// Code your solution in this file.

const lowerCaseDrivers = (arr) => {
  return arr.map(val => val.toLowerCase());
};

const nameToAttributes = (arr) => {
  let newArr = arr.map(val => val.split(" "));
  return newArr.map(val => console.log(val));
};