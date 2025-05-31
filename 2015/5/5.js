const input = (await Deno.readTextFile("./5.txt")).split("\r\n");

let count = 0;

for (const string of input) {
  let nice = false;
  let naught = false;

  let vowels = 0;
  let last = "";
  for (const char of string.split("")) {
    switch (char) {
      case "a": {
        vowels++;
        break;
      }
      case "b": {
        if (last == "a") naught = true;
        break;
      }
      case "d": {
        if (last == "c") naught = true;
        break;
      }
      case "e": {
        vowels++;
        break;
      }
      case "i": {
        vowels++;
        break;
      }
      case "o": {
        vowels++;
        break;
      }
      case "q": {
        if (last == "p") naught = true;
        break;
      }
      case "u": {
        vowels++;
        break;
      }
      case "y": {
        if (last == "x") naught = true;
        break;
      }
    }
    if (last == char) nice = true;
    last = char;
  }
  if (vowels >= 3 && nice == true && naught == false) count++;
}

console.log(count);

let count2 = 0;
for (const string of input) {
  const pairs = new Set();
  let two = false;
  let double = false;
  let lastlast = "";
  let last = "";
  for (const char of string.split("")) {
    const ll = lastlast + last;
    const lc = last + char;
    if ((ll !== lc) && pairs.has(lc)) double = true;
    if (char === lastlast) two = true;
    lastlast = last;
    last = char;
    if (ll.length == 2) pairs.add(ll);
  }
  if (double && two) count2++;
}

console.log(count2);
