const input = Number(await Deno.readTextFile("./20.txt"));

const MAX = input;
const houses = Array(MAX).fill(10);
const limit = Array(MAX).fill(10);

// starting the steps with 2 to end at max
for (let i = 2; i <= MAX; i++) {
  let k = 0;
  // going to all positions of the steps as long as we haveng
  // hit the maximum
  for (let j = i; j <= MAX; j += i) {
    houses[j - 1] += i * 10;
    if (k <= 50) limit[j - 1] += i * 11;
    k++;
  }
}

let i = 0;
while (houses[i] <= MAX) i++;

console.log(i + 1);

let p2 = 0;
while (limit[p2] <= MAX) p2++;

console.log(p2 + 1);
