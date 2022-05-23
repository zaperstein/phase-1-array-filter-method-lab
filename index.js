// Code your solution here
// function findMatching(str, drivers) {
//   if (str === str) {
//   drivers.filter(findMatching)
//   return str;
//   return filtered
// } else {

// }
  
// }

// const result = drivers.filter(findMatching);

// function findMatching(str) {
//   str === str 
// }


// function findMatching(drivers, function(str) {
//   return drivers;
//   }

function findMatching(drivers, str) {
  
const maybe = drivers.filter(driver => str.toLowerCase() === driver.toLowerCase())

return maybe;
}



function fuzzyMatch(drivers, str) {

const maybe = drivers.filter(driver => str === driver.slice(0,3));

return maybe;
}

function matchName() {
  //dot or bracket notation to access the information stored within the object stored within the array
}