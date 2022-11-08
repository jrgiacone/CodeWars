// This function takes a string and checks if there are any repeating letters, case does not matter.

function isIsogram(str){
    str = str.toLowerCase(); // Converts the parameter to lower case
    for (let i = 0; i < str.length; i++){ // Loops through starting at the first index
      for (let j = i + 1; j < str.length; j++){ // loops through each index of i + 1
        if (str[i] === str[j]){ // if any of the values are equal, we return false
          return false;
        }
      }
    }
    return true;
  }
