function hero(bullets, dragons){
  if (bullets < dragons){
    return false
  } else if (dragons === 0){
    return true
  }else {
    return hero(bullets - 2, dragons - 1)
  }
}