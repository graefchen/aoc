const input = (await Deno.readTextFile("./2.txt"))
  .split("\r\n").map((e) => e.split("x").map(Number));

const paper = input.map((e) => {
  const lw = e[0] * e[1];
  const wh = e[1] * e[2];
  const hl = e[0] * e[2];
  const smallest = Math.min(lw, wh, hl);
  return (2 * (lw + wh + hl) + smallest);
}).reduce((a, b) => a + b);

console.log(paper);

// [[2, 3, 4], [1, 1, 10]]
const ribon = input.map((e) => {
  const m = e.sort((a, b) => a - b);
  return ((m[0] + m[0] + m[1] + m[1]) + (e[0] * e[1] * e[2]));
}).reduce((a, b) => a + b);

// 3779138 => "to low"
// 3783758 <== possible right?
// 3800576 => "also wrong"
console.log(ribon);
