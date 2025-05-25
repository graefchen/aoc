const input = (await Deno.readTextFile("./3.txt")).split("")

const houses = new Set(["0;0"]);

let x = 0, y = 0
for (const c of input) {
  switch (c) {
    case "^": { y++; break; }
    case "v": { y--; break; }
    case ">": { x++; break; }
    case "<": { x--; break; }
  }
  const coords = `${x};${y}`;
  if (!(houses.has(coords))) {
    houses.add(coords)
  }
}

console.log(houses.size)

x = 0
y = 0

const santa = [new Set(["0;0"]), new Set(["0;0"])];
const posx = [0, 0], posy = [0, 0]
let i = 0
for (const c of input) {
  let p = 0
  if (i % 2 != 0) { p = 1 }
  switch (c) {
    case "^": { posy[p]++; break; }
    case "v": { posy[p]--; break; }
    case ">": { posx[p]++; break; }
    case "<": { posx[p]--; break; }
  }
  const coords = `${posx[p]};${posy[p]}`;
  if (!(santa[p].has(coords))) {
    santa[p].add(coords)
  }
  i++;
}

console.log(santa[0].union(santa[1]).size)