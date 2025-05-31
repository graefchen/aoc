const input = (await Deno.readTextFile("./13.txt")).split("\r\n");

const people = new Set();
const likeness = new Map();

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

for (const line of input) {
  const words = line.split(" ");
  const name = words[0];
  const what = words[2];
  const unit = Number(words[3]);
  const whom = words[10].substring(0, words[10].length - 1);
  people.add(name);
  likeness.set([name, whom].toString(), what == "gain" ? unit : -unit);
}

function calcLikeness(perms, likeness) {
  let max = -Infinity;
  for (const perm of perms) {
    let dist = 0;
    for (let p = 0; p < perm.length; p++) {
      const from = perm[p];
      const to = perm[(p + 1) % perm.length];
      dist += likeness.get([from, to].toString());
      dist += likeness.get([to, from].toString());
    }
    if (dist > max) max = dist;
  }
  return max;
}

// Part 1
const p1 = calcLikeness(perm(Array.from(people)), likeness);
console.log(p1);

// NOTE: For the fun of it!
const random = (a) => a[~~(Math.random() * a.length)];
const name = random(["Calliope", "August", "Ari", "Dakota", "Violet"]);

for (const person of people) {
  likeness.set([name, person].toString(), 0);
  likeness.set([person, name].toString(), 0);
}

people.add(name);

const p2 = calcLikeness(perm(Array.from(people)), likeness);
console.log(p2);