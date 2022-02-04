function stringCompression(string) {
  let compressionObject = {};
  let compressed = "";
  for (let char of string) {
    if (compressionObject[char] === undefined) {
      compressionObject[char] = 1;
    } else {
      compressionObject[char]++;
    }
  }
  for (let key in compressionObject) {
    compressed += `${key}${compressionObject[key]}`;
  }
  if (compressed.length < string.length) {
    return compressed;
  } else return string;
}

console.log(stringCompression("abc"));
