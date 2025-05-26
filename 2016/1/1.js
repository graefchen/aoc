const input = (await Deno.readTextFile("./1.txt")).split(", ");

// Part 1

let p = 0
const pos = { x: 0, y: 0 }
const move = [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: 0 }]

for (const line of input) {
  const dir = line.substring(0, 1)
  const length = line.substring(1)
  if (dir == "R") { p = (p + 1) % 4; }
  if (dir == "L") { p = p - 1; if (p == -1) { p = 3; } }
  pos.x = pos.x + (move[p].x * length)
  pos.y = pos.y + (move[p].y * length)
}

const l = Math.abs(pos.x) + Math.abs(pos.y)
console.log(l)

// Part 2

const visited = new Set(["0;0"])
let found = false;
let hq = "";
p = 0;
const pos2 = { x: 0, y: 0 }

for (const line of input) {
  const dir = line.substring(0, 1)
  const length = line.substring(1)
  if (dir == "R") { p = (p + 1) % 4; }
  if (dir == "L") { p = p - 1; if (p == -1) { p = 3; } }
  for (let i = 0; i < length; i++) {
    pos2.x = pos2.x + (move[p].x * 1)
    pos2.y = pos2.y + (move[p].y * 1)

    const xy = `${pos2.x};${pos2.y}`
    if (visited.has(xy) && !found) {
      hq = xy;
      found = true;
      break;
    }
    visited.add(xy);
  }
}

console.log(hq)
console.log(hq.split(";").map(Number).map(Math.abs).reduce((a, b) => a + b, 0))
