function palindromePermutation(string) {
  let wordObj = {};
  let length = 0;
  let oneOdd = false;
  for (let char of string) {
    if (char === " ") {
      continue;
    }
    length++;
    if (wordObj[char] === undefined) {
      wordObj[char] = 1;
    } else {
      wordObj++;
    }
  }
  if (length % 2 === 0) {
    for (let key in wordObj) {
      if (wordObj[key] % 2 !== 0) {
        return false;
      }
    }
  } else {
    for (let key in wordObj) {
      if (wordObj[key] % 2 == 1) {
        if (!oneOdd) {
          oneOdd = true;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

console.log(palindromePermutation("yee"));
