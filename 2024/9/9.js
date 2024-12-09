const input = (await Deno.readTextFile("./9.in"))
  .split("\r\n")[0]
  .split("")
  .map((e) => parseInt(e, 10));

// const input = "2333133121414131402".split("").map((e) => parseInt(e, 10));

// Part 1
const max = input.length;
const a = [];
let index = 0;
const stack = [];
for (let i = 0; i < max; i++) {
  const num = input.at(i);
  for (let j = 0; j < num; j++) {
    a.push(i % 2 == 0 ? index : ".");
  }
  index = index + (i % 2 == 0);
}
let free = 0;
for (let i = a.length - 1; i >= 0; i--) {
  if (a.at(i) === ".") {
    stack.push(i);
    free = free + 1;
  }
}
let number = a.length - 1;
while (free != 0 && number != 0) {
  if (a.at(number) !== ".") {
    const n = stack.pop();
    if (n > number) {
      break;
    }
    const t = a.at(n);
    a[n] = a.at(number);
    a[number] = t;
    free = free - 1;
  }
  number = number - 1;
}
const m = a.filter((e) => e !== ".");
const num = m.map((v, i) => v * i).reduce((a, b) => a + b);

console.log(num);

// Part 2
const File = [];
const Space = [];
const FileSystem = [];
let position = 0;
let file_id = 0;
for (let i = 0; i < max; i++) {
  const num = input.at(i);
  if (i % 2 == 0) {
    File.push({ position: position, length: num, id: file_id });
    for (let j = 0; j < num; j++) {
      FileSystem.push(file_id);
      position = position + 1;
    }
    file_id = file_id + 1;
  } else {
    Space.push({ position: position, length: num });
    for (let j = 0; j < num; j++) {
      FileSystem.push(null);
      position = position + 1;
    }
  }
}

File.reverse();

for (const file of File) {
  let space_i = 0;
  for (const space of Space) {
    if (space.position < file.position && file.length <= space.length) {
      for (let i = 0; i < file.length; i++) {
        FileSystem[file.position + i] = null;
        FileSystem[space.position + i] = file.id;
      }
      Space[space_i] = {
        position: space.position + file.length,
        length: space.length - file.length,
      };
      break;
    }
    space_i = space_i + 1;
  }
}

// console.log(FileSystem.map((e) => (e === null ? "." : e)).join(""));

let answer = 0;
let pos = 0;
for (const i of FileSystem) {
  if (i != null) {
    answer = answer + pos * i;
  }
  pos = pos + 1;
}

console.log(answer);
