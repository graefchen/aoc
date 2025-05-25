import { MD5 } from "./md5.js"

const input = (await Deno.readTextFile("./4.txt"))

let i = 0
while (true) {
  const hash = MD5(input + i);
  if (hash.substring(0, 5) == "00000") {
    break;
  }
  i++;
}
cd
console.log(i)

i = 0
while (true) {
  const hash = MD5(input + i);
  if (hash.substring(0, 6) == "000000") {
    break;
  }
  i++;
}

console.log(i)