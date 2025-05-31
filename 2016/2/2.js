const input = (await Deno.readTextFile("./2.txt")).split("\r\n");

// Part 1

let c = 2, r = 2;
let pw = "";

for (const str of input) {
  for (const chr of str.split("")) {
    switch (chr) {
      case "U": {
        if (r != 1) r--;
        break;
      }
      case "D": {
        if (r != 3) r++;
        break;
      }
      case "L": {
        if (c != 1) c--;
        break;
      }
      case "R": {
        if (c != 3) c++;
        break;
      }
    }
    // console.log(chr, "=> key:", c + ((r - 1) * 3))
  }
  pw += `${c + ((r - 1) * 3)}`;
}

console.log(pw);

// Part 2

let c2 = 0, r2 = 2;
let pw2 = "";
const kp = [
  ["", "", "1", "", ""],
  ["", "2", "3", "4", ""],
  ["5", "6", "7", "8", "9"],
  ["", "A", "B", "C", ""],
  ["", "", "D", "", ""],
];

for (const str of input) {
  for (const chr of str.split("")) {
    switch (chr) {
      case "U": {
        if (r2 != 0 && kp[r2 - 1][c2] != "") r2--;
        break;
      }
      case "D": {
        if (r2 != 4 && kp[r2 + 1][c2] != "") r2++;
        break;
      }
      case "L": {
        if (c2 != 0 && kp[r2][c2 - 1] != "") c2--;
        break;
      }
      case "R": {
        if (c2 != 4 && kp[r2][c2 + 1] != "") c2++;
        break;
      }
    }
    // console.log(chr, "=> key:", kp[r2][c2]);
  }
  pw2 += kp[r2][c2];
}

console.log(pw2);
