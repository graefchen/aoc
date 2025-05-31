const input = await Deno.readTextFile("./6.txt");

const Grid = input.split("\r\n");
const Row = Grid.length;
const Col = Grid.at(0).length;
let p1 = 0;
let p2 = 0;

let gr, gc;

for (let r = 0; r < Row; r++) {
  for (let c = 0; c < Col; c++) {
    if (Grid.at(r).at(c) == "^") {
      gc = c;
      gr = r;
    }
  }
}

for (let or = 0; or < Row; or++) {
  for (let oc = 0; oc < Col; oc++) {
    let col = gc;
    let row = gr;
    let direction = 0;
    const Known = new Set();
    const Known_RC = new Set();
    while (true) {
      if (Known.has(`r:${row},c:${col},d:${direction}`)) {
        p2 = p2 + 1;
        break;
      }
      Known.add(`r:${row},c:${col},d:${direction}`);
      Known_RC.add(`r:${row},c:${col}`);
      const directionrow = [-1, 0, 1, 0][direction];
      const directioncol = [0, 1, 0, -1][direction];
      const rowrow = row + directionrow;
      const colcol = col + directioncol;
      if (
        !(((0 <= rowrow) && (rowrow < Row)) &&
          ((0 <= colcol) && (colcol < Col)))
      ) {
        if (Grid.at(or).at(oc) == "#") {
          p1 = Known_RC.size;
        }
        break;
      }
      if (
        (Grid.at(rowrow).at(colcol) == "#") ||
        ((rowrow == or) && (colcol == oc))
      ) {
        direction = (direction + 1) % 4;
      } else {
        row = rowrow;
        col = colcol;
      }
    }
  }
}

console.log(p1);
console.log(p2);
