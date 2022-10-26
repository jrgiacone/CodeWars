const mergeArrays = (arr1, arr2) => {
  let arr = arr1.concat(arr2).splice((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1)
    }
  }
  return arr;
}

