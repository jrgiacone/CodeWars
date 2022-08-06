function hello(name) {
  return name !== undefined && name!== '' ? `Hello, ${capitalizedFirstString(name.toLowerCase())}!` : 'Hello, World!'
}

const capitalizedFirstString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}