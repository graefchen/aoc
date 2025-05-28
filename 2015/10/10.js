const input = (await Deno.readTextFile("./10.txt"))

function look(string) {
  const str = string.split("");
  let r = "";
  let i = 1;
  let amount = 1;
  let current = str[0];
  while (i <= str.length) {
    if (current === str[i] && i != str.length) {
      amount++;
    } else {
      r += `${amount}${current}`
      amount = 1;
      current = str[i];
    }
    i++;
  }
  return r;
}

// Part 1
let start = input;
for (let i = 0; i <= 39; i++) {
  start = look(start);
}
console.log(start.length);

// Part 2
for (let i = 0; i <= 9; i++) {
  start = look(start);
}
console.log(start.length);
