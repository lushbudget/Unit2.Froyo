//create a prompt to get a list of flavors
let flavors = prompt("Please enter a list of the froyo flavors seperated by a comma")
//assign the input string to a new array of flavors
//split at the commas
const flavArray = flavors.split(',');
//create an object that will hold the input flavors
const flavorObj = {}
//iterate through each flavor in the array 
for (let i=0; i<flavArray.length; i++) {
  const curFlavor = flavArray[i];
  //find the current flavor in the array 
  //flavArray[i] gets the current flavor and uses it assign value to the object name corresponding to the current flavor in our loop.
  flavorObj[curFlavor] = flavorObj[curFlavor];
  //check if we've seen the current flavor before (through trial and error and googling found that I had to check if we HAVEN't NOT seen it before)
  if (flavorObj[curFlavor] != undefined) {
    //if the flavor does, in fact, already exist, we have to add one to the count (or the value).
    flavorObj[curFlavor] = flavorObj[curFlavor] + 1;
  } else {
    //if it doesn't already exist, we have to add it to the object and set the value to 1
    flavorObj[curFlavor] = 1;
  }
}

console.log(flavorObj);
  





// let counter = 1
  // curFlavor = flavArray[i];
  // if (curFlavor === flavArray.indexOf(curFlavor)) {
  //   counter ++
  // } else newArr.push(curFlavor);
  // console.log(newArr);
  // console.log(counter)
//   //find out if the flavor has any duplicates
//   if (curFlavor === flavorObj.name) {
//   //skip adding to object if we have seen the flavor before
//   //increase the value by one
//     flavorObj.value = flavorObj
//   } else {
//     flavorObj.name = curFlavor;
//     console.log(flavorObj);
//   }
  
// }

//check array for duplicates
//iterate through original array with a counter at zero
//each time we see the same flavor increase the counter by one 
//add each flavor to the object as the name and set the value to the counter

//vanilla,chocolate,vanilla,strawberry,coffee,chocolate,vanilla