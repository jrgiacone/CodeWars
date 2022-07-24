function longestConsec(strarr, k) {
    if (strarr.length === 0 || k>strarr.length || k <=0 ) {
      return "";
    }else{
      let list = [];
      for (let i =0; i<strarr.length-k+1; i++){
        list[i]=strarr.slice(i,k+i).join('');
      }
      let longest = list.reduce((a,b) => a.length>=b.length ? a : b)
      return longest
    }
}