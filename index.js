// Code your solution in this file.

const lowerCaseDrivers = (arr) => {
  return arr.map(val => val.toLowerCase());
};

const nameToAttributes = (arr) => {
  return arr.map(driver => {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    
    return {
      firstname: driverFirst,
      lastname: driverLast
    }
  })
};