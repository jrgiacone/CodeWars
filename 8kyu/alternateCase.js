String.prototype.toAlternatingCase = function () {
  return this.split('').map(c => c === c.toUpperCase() ? c.toLowerCase(): c.toUpperCase()).join('');
}