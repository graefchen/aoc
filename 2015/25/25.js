const input = (await Deno.readTextFile("./25.txt")).split(" ");
const row = Number(input.at(16).slice(0, -1));
const col = Number(input.at(18).slice(0, -1));

let code = 20151125;
let r = 1,
  c = 1;

while (r != row || c != col) {
  r -= 1;
  c += 1;

  if (r == 0) {
    r = c;
    c = 1;
  }

  code = (code * 252533) % 33554393;
}

console.log(code);
