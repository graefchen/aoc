const input = (await Deno.readTextFile("./15.txt")).split("\r\n");
const re =
  /(?<name>\w+): capacity (?<cap>-?\d+), durability (?<dur>-?\d+), flavor (?<fla>-?\d+), texture (?<tex>-?\d+), calories (?<cal>-?\d+)/;
const length = input.length;

const ingredients = {
  capacity: Array(length),
  durability: Array(length),
  texture: Array(length),
  flavor: Array(length),
  calories: Array(length),
};

for (let i = 0; i < length; i++) {
  const ing = input[i].match(re);
  ingredients.capacity[i] = Number(ing.groups.cap);
  ingredients.durability[i] = Number(ing.groups.dur);
  ingredients.flavor[i] = Number(ing.groups.fla);
  ingredients.texture[i] = Number(ing.groups.tex);
  ingredients.calories[i] = Number(ing.groups.cal);
}

function calc(a, b, c, d) {
  const cap = ingredients.capacity[0] * a + ingredients.capacity[1] * b +
    ingredients.capacity[2] * c + ingredients.capacity[3] * d;
  const dur = ingredients.durability[0] * a + ingredients.durability[1] * b +
    ingredients.durability[2] * c + ingredients.durability[3] * d;
  const fla = ingredients.flavor[0] * a + ingredients.flavor[1] * b +
    ingredients.flavor[2] * c + ingredients.flavor[3] * d;
  const tex = ingredients.texture[0] * a + ingredients.texture[1] * b +
    ingredients.texture[2] * c + ingredients.texture[3] * d;
  return ((cap < 0 ? 0 : cap) * (dur < 0 ? 0 : dur) * (fla < 0 ? 0 : fla) *
    (tex < 0 ? 0 : tex));
}

function calories(a, b, c, d) {
  return ingredients.calories[0] * a + ingredients.calories[1] * b +
    ingredients.calories[2] * c + ingredients.calories[3] * d;
}

let max = -Infinity;
let calMax = -Infinity;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100 - i; j++) {
    for (let k = 0; k < 100 - j - i; k++) {
      const c = calc(i, j, k, 100 - i - j - k);
      if (c >= max) {
        max = c;
      }
      if (c >= calMax && calories(i, j, k, 100 - i - j - k) == 500) {
        calMax = c;
      }
    }
  }
}

console.log(max);
console.log(calMax);
