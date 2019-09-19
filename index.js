// Code your solution in this file.

const lowerCaseDrivers = (arr) => {
  return arr.map(val => val.toLowerCase());
};

const nameToAttributes = (arr) => {
  return arr.map(val =>
    arr.firstname = val.split(" ")[0],
    arr.lastname = val.split(" ")[1]
  );
};