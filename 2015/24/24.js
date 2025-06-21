import * as $C from "https://cdn.jsdelivr.net/npm/js-combinatorics@2.1.2/combinatorics.min.js";
const input = (await Deno.readTextFile("./24.txt"))
  .split("\r\n")
  .map((e) => Number(e));
const combinations = (from, pick) => [...$C.Combination.of(from, pick)];

const weight = input.reduce((a, v) => a + v, 0);

let part1 = Infinity;
let part2 = Infinity;
for (let i = 0; i < 9; i++) {
  for (const c of combinations(input, i)) {
    const sum = c.reduce((a, v) => a + v, 0);
    if (sum == weight / 3) {
      part1 = Math.min(
        part1,
        c.reduce((a, v) => a * v, 1)
      );
    } else if (sum == weight / 4) {
      part2 = Math.min(
        part2,
        c.reduce((a, v) => a * v, 1)
      );
    }
  }
}

console.log(part1);
console.log(part2);
