const sumPairs = (array,s) => {
  let a, i,
      hash = Object.create(null);
  
  for (i = 0; i < array.length; i++){
    a = array[i];
    if(hash[s-a]){
      return [s -a, a];
    }
    if (!hash[a]){
      hash[a] = true;
    }
  }
}