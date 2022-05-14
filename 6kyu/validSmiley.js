//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  arr.forEach(x => { console.log(x)
    if (x.length<=3){
      if (x.includes('-') || x.includes('~')){
      if (x.includes(`)`) || x.includes(`D`) ){
        count +=1
        console.log(x + ' - res')
      } 
    }else if (x.includes(':)') || x.includes(';)') || x.includes(':D') || x.includes(';D')){
        count +=1
        console.log(x + ' - res')
      } 
    }
  })
  return count
}