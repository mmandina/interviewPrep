function oneAway(string1, string2) {
  if (
    string1.length === string2.length + 1 ||
    string1.length === string2.length - 1
  ) {
    let longer;
    let shorter;

    if (string1.length > string2.length) {
      longer = string1.split("");
      shorter = string2.split("");
    } else {
      longer = string2.split("");
      shorter = string1.split("");
    }
    let oneWrong = false;
    let index2 = 0;
    for (let i = 0; i < longer.length; i++) {
      console.log(longer[i], " ", shorter[index2]);

      if (longer[i] !== shorter[index2]) {
        if (oneWrong) {
          return false;
        }
        oneWrong = true;
      } else {
        index2++;
      }
    }
    return true;
  } else if (string1.length === string2.length) {
    array1 = string1.split("");
    array2 = string2.split("");
    let oneWrong = false;
    for (let i = 0; i < array1.length; i++) {
      console.log(array1[i], " ", array2[i]);

      if (array1[i] !== array2[i]) {
        if (oneWrong) {
          return false;
        }
        oneWrong = true;
      }
    }
    return true;
  }

  return false;
}
console.log(oneAway("maple", "madde"));
