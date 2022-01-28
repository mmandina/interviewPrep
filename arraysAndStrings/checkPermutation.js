function checkPermutationObj(str1, str2) {
  let str1Obj = {};
  for (let char of str1) {
    if (str1Obj[char] === undefined) {
      str1Obj[char] = 1;
    } else {
      str1Obj[char]++;
    }
  }
  for (let char of str2) {
    if (str1Obj[char] === undefined) {
      return false;
    } else {
      str1Obj[char]--;
    }
    if (str1Obj[char] < 0) {
      return false;
    }
  }

  for (let key in str1Obj) {
    if (str1Obj[key] > 0) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutationObj("abbc", "abbc"));
