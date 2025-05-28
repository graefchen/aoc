const input = (await Deno.readTextFile("./8.txt")).split("\r\n");

// Part 1
const num = input.reduce((a, l) => a + (l.length - eval(l).length), 0);
console.log(num);

// Part 2
const enc = input.reduce((a, l) => a + (2 + l.replace(/\\/g, '\\\\').replace(/"/g, '\\"').length - l.length), 0);
console.log(enc);
