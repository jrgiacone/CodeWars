function vertMirror(strng) {
  return strng.map(s => [...s].reverse().join(''));
}
function horMirror(strng) {
    return strng.reverse();
}
function oper(fct, s) {
    return fct(s.split("\n")).join("\n");
}
