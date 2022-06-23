function friend(friends){
  let myFriends = [];
  friends.forEach(x=> {
    if (x.length === 4) myFriends.push(x)
  })
  return (myFriends)
}