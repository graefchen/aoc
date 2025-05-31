const input = await Deno.readTextFile("./11.txt");

function incChar(char) {
  if (char === "z") return "a";
  const newChar = char.charCodeAt(0) + 1;
  // rule no: "i", "o", "l"
  switch (newChar) {
    case (105): /* i */
    case (108): /* l */
    case (111): /* o */
      return String.fromCharCode(newChar + 1);
  }
  return String.fromCharCode(newChar);
}

function incString(string) {
  const letters = string.split("").reverse();
  let i = 0;
  for (const c of letters) {
    letters[i] = incChar(c);
    if (letters[i] != "a") {
      break;
    }
    i++;
  }
  return letters.reverse().join("");
}

function isIncreasing(string) {
  const letters = string.split("").map((char) => char.charCodeAt(0));
  for (let i = 0; i < letters.length - 2; i++) {
    if (letters[i] == letters[i + 1] - 1 && letters[i] == letters[i + 2] - 2) {
      return true;
    }
  }
  return false;
}
function isValidPairs(string) {
  return /(\w)\1.*(\w)\2/.test(string);
}

function isValid(string) {
  return isIncreasing(string) && isValidPairs(string);
}

// Part 1
let string = incString(input);

while (!isValid(string)) string = incString(string);

console.log(string);

// Part 2
string = incString(string);

while (!isValid(string)) string = incString(string);

console.log(string);
