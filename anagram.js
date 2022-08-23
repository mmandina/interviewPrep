function isAnagram(string1, string2) {
  let word1 = {}
  if (string1.length !== string2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++){
    if (word1[string1.charAt(i)]) {
      word1[string1.charAt(i)]++
    } else {
      word1[string1.charAt(i)] = 1;
    }
  }
  for (let i = 0; i < string2.length; i++){
    if (word1[string2.charAt(i)]) {
      word1[string2.charAt(i)]--
    } else {
      return false;
    }
    if (word1[string2.charAt(i)] <= 0) {
      return false;
    }
    
  }
  return true;





}

console.log(isAnagram("elephant"));