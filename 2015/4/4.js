import { md5 } from "jsr:@takker/md5";
import { encodeHex } from "jsr:@std/encoding@1/hex";

const input = await Deno.readTextFile("./4.txt");

let i = 0;
while (true) {
  const hash = encodeHex(md5(input + i));
  if (hash.substring(0, 5) == "00000") {
    break;
  }
  i++;
}

console.log(i);

i = 0;
while (true) {
  const hash = encodeHex(md5(input + i));
  if (hash.substring(0, 6) == "000000") {
    break;
  }
  i++;
}

console.log(i);
