function urlify(string) {
  let trimmed = string.trim();
  let url = "";
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      url += "%20";
    } else {
      url += `${trimmed[i]}`;
    }
  }
  return url;
}

console.log(urlify("this is a sentence"));
