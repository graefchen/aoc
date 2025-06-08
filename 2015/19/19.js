const input = (await Deno.readTextFile("./19.txt")).split("\r\n\r\n");

const instr = input.at(0).split("\r\n");
const molec = input.at(1);

const Molecules = new Set();

for (const ins of instr) {
  const replacement = ins.split(" => ").at(1);
  const finder = ins.split(" => ").at(0);

  let old = "";
  let current = molec.substring(0);
  for (let i = 0; i < molec.length; i++) {
    Molecules.add(old + current.replace(finder, replacement));
    old = old + current.substring(0, 1);
    current = current.substring(1);
  }
}

// removing original that was also put in the Set
Molecules.delete(molec);
console.log(Molecules.size);

const steps = [molec];
let j = 0;
let s = 0;

console.log(instr);

while (steps[j] !== "e") {
  let string = steps[j];
  for (const ins of instr) {
    const f = ins.split(" => ").at(1);
    const r = ins.split(" => ").at(0);

    const str = string.replace(f, r);
    if (str !== string) {
      string = str;
      s++;
    }
  }
  steps.push(string);
  j++;
}

console.log(s);
