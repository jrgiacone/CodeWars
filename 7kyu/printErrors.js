function printerError(s) {
  const invalidCharacters = [...s]
    .map((s) => s.charCodeAt(0))
    .filter((charCode) => charCode < 97 || charCode > 109);
  return `${invalidCharacters.length}/${s.length}`;
}
