String.prototype.toJadenCase = function () {
  let str = "";
  this.split(" ").forEach(x => {
    str = str + " " + x.substring(0,1).toUpperCase() + x.substring(1);
  });
  return str.substr(1);                        
};