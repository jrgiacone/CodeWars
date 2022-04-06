function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    str.split("").forEach(x=>{
      if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
        vowelsCount += 1; 
      }
    })
    return vowelsCount;
  }