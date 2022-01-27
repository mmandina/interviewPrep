function isUniqueNoData(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(isUniqueNoData("radar"));

function isUniqueSort(string) {
  let array = string.split("").sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === undefined) {
      return true;
    }
    if (array[i] === array[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isUniqueSort("abc"));

function isUniqueHash(string) {
  let seen = {};
  for (let char of string) {
    if (seen[char] === undefined) {
      seen[char] = 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(isUniqueHash("abc"));
