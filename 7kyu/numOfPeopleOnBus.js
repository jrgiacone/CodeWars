var number = function(busStops){
  let total = 0;
  busStops.map(x => {
    total += x[0]
    total -= x[1]
  })
  return total;
}