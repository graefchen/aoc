const input = (await Deno.readTextFile("./7.txt")).split("\r\n")
const re_command = /[A-Z]+/g
const re_argument = /[a-z0-9]+/g
const WIRES = new Map();

const METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: (a, _b) => ~a,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b,
};

for (const instruction of input) {
  const cmd = instruction.match(re_command);
  const args = instruction.match(re_argument);
  const destination = args.pop();
  const command = cmd && cmd[0];
  if (command == null) {
    if (isNaN(args[0])) WIRES.set(destination, args[0]);
    if (!isNaN(args[0])) WIRES.set(destination, Number(args[0]));
  } else {
    const a = isNaN(args[0]) ? args[0] : Number(args[0]);
    const b = isNaN(args[1]) ? args[1] : Number(args[1]);
    WIRES.set(destination, { command, a, b });
  }
}

// Next line is Part 2
// WIRES.set("b", here comes in your answer a);

const calculate = (name) => {
  const value = WIRES.get(name)
  if (typeof name === "number") return name;
  if (typeof value === "number") return value;
  if (typeof value === "undefined") return undefined;
  if (!value.command) {
    WIRES.set(name, calculate(value))
  } else {
    const n = METHODS[value.command](calculate(value.a), calculate(value.b));
    WIRES.set(name, (n < 0 ? 65536 + n : n));
  }
  return WIRES.get(name);
}

console.log(calculate("a"));
