function isPangram(string){
  string = string.toLowerCase();
  let regex = /([a-z])(?!.*\1)/g;
  return (string.match(regex) || []).length === 26;
}