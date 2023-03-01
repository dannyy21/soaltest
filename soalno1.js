function reverseAlphabet(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let reverseAlph = alphabet.split("").reverse().join("");
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      newStr += reverseAlph[alphabet.indexOf(str[i])];
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(reverseAlphabet("NEGIE1")); 




