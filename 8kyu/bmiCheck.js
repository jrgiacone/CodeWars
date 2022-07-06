function bmi(weight, height) {
  let mass = weight/Math.pow(height,2)
  return mass <= 18.5 
    ? "Underweight" : mass <= 25 
    ? "Normal" : mass <= 30 
    ? "Overweight" : "Obese"
}