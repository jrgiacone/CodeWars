function getGrade (s1, s2, s3) {
  let grade = (s1+s2+s3)/3
  if(grade >= 90){
    return 'A'
  }else if(grade >= 80){
    return 'B'
  }else if(grade >= 70){
    return 'C'
  }else if(grade >= 60){
    return 'D'
  }else{
    return 'F'
  }
}