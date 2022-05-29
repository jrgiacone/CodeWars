function rentalCarCost(d) {
  let costOfCar = 40;
  if (d >= 7){
    return costOfCar*d-50;
  }else if(d>=3){
    return costOfCar*d-20;
  }else{
    return costOfCar*d
  }
}