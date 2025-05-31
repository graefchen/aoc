const input = (await Deno.readTextFile("./12.txt"));

const re = /-?(\d)+/g;

// Part 1
console.log(input.match(re).reduce((a, c) => a + Number(c), 0));

// Part 2
console.log(JSON.stringify(JSON.parse(input, (_, v) => {
  if (typeof v === 'object' && !Array.isArray(v)) {
    return (Object.values(v).includes("red") ? {} : v);
  }
  return v;
})).match(re).reduce((a, c) => a + Number(c), 0));