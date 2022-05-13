function areYouPlayingBanjo(name) {
  return name[0].toLowerCase().includes('r') ? `${name} plays banjo` : `${name} does not play banjo`;
}