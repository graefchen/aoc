const input = (await Deno.readTextFile("./14.txt")).split("\r\n");
const length = input.length;

const speed = Array(length);
const time = Array(length);
const rest = Array(length);
const resting = Array(length).fill(false);
const remaining = Array(length);
const dist = Array(length).fill(0);
const points = Array(length).fill(0);

for (let i = 0; i < length; i++) {
  const d = input[i].split(" ");
  speed[i] = Number(d[3]);
  time[i] = Number(d[6]);
  rest[i] = Number(d[13]);
  remaining[i] = time[i];
}

function getPositions(arr, value) {
  const pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) pos.push(i);
  }
  return pos;
}

for (let i = 1; i <= 2503; i++) {
  for (let j = 0; j < length; j++) {
    if (remaining[j] == 0) {
      if (resting[j] == false) {
        remaining[j] = rest[j];
        resting[j] = true;
      } else {
        remaining[j] = time[j];
        resting[j] = false;
      }
    }
    if (!resting[j]) dist[j] += speed[j];
    remaining[j]--;
  }
  const max = Math.max(...dist);
  const pos = getPositions(dist, max);
  for (const p of pos) points[p]++;
}

// Part 1
console.log(Math.max(...dist));
// Part 2
console.log(Math.max(...points));
