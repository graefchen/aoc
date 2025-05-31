const input = (await Deno.readTextFile("./9.txt")).split("\r\n");

// console.log(input);
const re = /(\w+) to (\w+) = (\d+)/;
const citys = new Set();

const distance = new Map();

for (const dir of input) {
  const data = dir.match(re);
  const from = data[1];
  const to = data[2];
  const dist = data[3];
  citys.add(from);
  citys.add(to);
  distance.set([from, to].toString(), Number(dist));
  distance.set([to, from].toString(), Number(dist));
}

// https://stackoverflow.com/a/43260158
function perm(xs) {
  const ret = [];
  for (let i = 0; i < xs.length; i = i + 1) {
    const rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
    if (!rest.length) {
      ret.push([xs[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]));
      }
    }
  }
  return ret;
}

const perms = perm(Array.from(citys));

// Part 1 is min, Part 2 is max
let min = Infinity;
let max = -Infinity;
for (const perm of perms) {
  let dist = 0;
  for (let p = 0; p < perm.length - 1; p++) {
    const from = perm[p];
    const to = perm[p + 1];
    dist += distance.get([from, to].toString());
  }
  if (dist < min) min = dist;
  if (dist > max) max = dist;
}

console.log(min);
console.log(max);
