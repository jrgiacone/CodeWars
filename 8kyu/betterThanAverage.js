function betterThanAverage(classPoints, yourPoints) {
  let avg = 0;
  classPoints.forEach(x => avg += x);
  return avg/classPoints.length < yourPoints
}