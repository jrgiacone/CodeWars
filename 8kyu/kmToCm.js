function cockroachSpeed(s) {
  let convCent = 100000;
  let convSec = 3600;
  return Math.floor(s*convCent/convSec)
}