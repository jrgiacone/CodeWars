function nbYear(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    n++
    p0 = p0 + Math.floor((p0*percent/100)) + aug;
  }
  if (p0 >= p) {
      return n;
  }
  return n;
}
