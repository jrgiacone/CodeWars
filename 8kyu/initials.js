function abbrevName(name){
  let split = name.toUpperCase().split(' ')
  return `${split[0].charAt(0)}.${split[1].charAt(0)}`

}