// Note: This is *just* Conway's Game of Life
const input = (await Deno.readTextFile("./18.txt"))
  .split("\r\n")
  .map((e) => e.split(""));
const Row = input.length;
const Col = input.at(0).length;

const MAX_FRAMES = 100;

let current_frame = input;
const next_frame = Array(Row)
  .fill()
  .map(() => Array(Col).fill("."));

function count(row, col) {
  let neighbors = current_frame[row][col] == "#" ? -1 : 0;
  for (let deltarow = -1; deltarow <= 1; deltarow++) {
    if (current_frame[row + deltarow] == undefined) continue;
    for (let deltacol = -1; deltacol <= 1; deltacol++) {
      if (current_frame[row + deltarow][col + deltacol] == undefined) continue;
      if (current_frame[row + deltarow][col + deltacol] === "#") neighbors++;
    }
  }
  return neighbors;
}

// Comment out for Part 1
current_frame[0][0] = "#";
current_frame[0][99] = "#";
current_frame[99][99] = "#";
current_frame[99][0] = "#";

for (let frame = 1; frame <= MAX_FRAMES; frame++) {
  for (let i = 0; i < Row; i++) {
    for (let j = 0; j < Col; j++) {
      const c = count(i, j);
      next_frame[i][j] = c;

      if (current_frame[i][j] === "#" && (c == 2 || c == 3))
        next_frame[i][j] = "#";
      else next_frame[i][j] = ".";
      if (current_frame[i][j] === "." && c == 3) next_frame[i][j] = "#";
    }
  }
  // Comment out for Part 1
  next_frame[0][0] = "#";
  next_frame[0][99] = "#";
  next_frame[99][99] = "#";
  next_frame[99][0] = "#";
  // TODO: Make it less ... like it is currently ...
  current_frame = JSON.parse(JSON.stringify(next_frame));
}

console.log(
  current_frame
    .map((e) => e.map((m) => (m == "#" ? 1 : 0)).reduce((p, c) => p + c, 0))
    .reduce((p, c) => p + c, 0)
);
