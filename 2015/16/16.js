const input = (await Deno.readTextFile("./16.txt")).split("\r\n");
const lenght = input.length;
const part1 = Array(lenght).fill(0);
const part2 = Array(lenght).fill(0);
const aunts = {
  children: Array(lenght),
  cats: Array(lenght),
  samoyeds: Array(lenght),
  pomeranians: Array(lenght),
  akitas: Array(lenght),
  vizslas: Array(lenght),
  goldfish: Array(lenght),
  trees: Array(lenght),
  cars: Array(lenght),
  perfumes: Array(lenght),
};
const tt = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

for (let i = 0; i < lenght; i++) {
  const items = input[i]
    .split(":")
    .map((e) => e.split(","))
    .flat()
    .toSpliced(0, 1);
  for (let j = 0; j < 6; j = j + 2) {
    aunts[items[j].trimStart()][i] = Number(items[j + 1]);
  }
}

for (let i = 0; i < lenght; i++) {
  let hit1 = 0;
  let hit2 = 0;
  for (const key of Object.keys(tt)) {
    if (aunts[key] != undefined) {
      if (tt[key] == aunts[key][i]) {
        hit1++;
      }
      switch (key) {
        case "cats":
        case "trees": {
          if (aunts[key][i] > tt[key]) hit2++;
          break;
        }
        case "pomeranians":
        case "goldfish": {
          if (aunts[key][i] < tt[key]) hit2++;
          break;
        }
        default: {
          if (tt[key] == aunts[key][i]) hit2++;
          break;
        }
      }
    }
  }
  part1[i] = hit1;
  part2[i] = hit2;
}

console.log(part1.indexOf(Math.max(...part1)) + 1);
console.log(part2.indexOf(Math.max(...part2)) + 1);
