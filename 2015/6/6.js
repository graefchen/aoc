const input = (await Deno.readTextFile("./6.txt")).split("\r\n");

// Part 1

const LIGHTS = Array(1000).fill().map(() => Array(1000).fill(0));

const re =
  /(toggle|turn on|turn off){1} (\d{1,3}),(\d{1,3}) through (\d{1,3}),(\d{1,3})/;

for (const str of input) {
  const found = str.match(re);
  const x_start = Number(found[2]);
  const y_start = Number(found[3]);
  const x_end = Number(found[4]);
  const y_end = Number(found[5]);

  for (let x = x_start; x <= x_end; x++) {
    for (let y = y_start; y <= y_end; y++) {
      if (found[1] === "toggle") LIGHTS[x][y] = LIGHTS[x][y] == 0 ? 1 : 0;
      if (found[1] === "turn on") LIGHTS[x][y] = 1;
      if (found[1] === "turn off") LIGHTS[x][y] = 0;
    }
  }
}

const amount = LIGHTS.map((a) => a.reduce((a, b) => a + b, 0)).reduce(
  (a, b) => a + b,
  0,
);
console.log(amount);

// Part 2

const LIGHTS2 = Array(1000).fill().map(() => Array(1000).fill(0));

for (const str of input) {
  const found = str.match(re);
  const x_start = Number(found[2]);
  const y_start = Number(found[3]);
  const x_end = Number(found[4]);
  const y_end = Number(found[5]);

  for (let x = x_start; x <= x_end; x++) {
    for (let y = y_start; y <= y_end; y++) {
      if (found[1] === "toggle") LIGHTS2[x][y] = LIGHTS2[x][y] + 2;
      if (found[1] === "turn on") LIGHTS2[x][y]++;
      if (found[1] === "turn off") LIGHTS2[x][y] >= 1 ? LIGHTS2[x][y]-- : 0;
    }
  }
}

const amount2 = LIGHTS2.map((a) => a.reduce((a, b) => a + b, 0)).reduce(
  (a, b) => a + b,
  0,
);
console.log(amount2);
