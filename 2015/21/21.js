const input = (await Deno.readTextFile("./21.txt")).split("\r\n");

const weapons = [
  { name: "Dagger", cost: 8, damage: 4, armor: 0 },
  { name: "Shortsword", cost: 10, damage: 5, armor: 0 },
  { name: "Warhammer", cost: 25, damage: 6, armor: 0 },
  { name: "Longsword", cost: 40, damage: 7, armor: 0 },
  { name: "Greataxe", cost: 74, damage: 8, armor: 0 },
];

const armors = [
  // None
  { name: "Bare", cost: 0, damage: 0, armor: 0 },
  { name: "Leather", cost: 13, damage: 0, armor: 1 },
  { name: "Chainmail", cost: 31, damage: 0, armor: 2 },
  { name: "Splintmail", cost: 53, damage: 0, armor: 3 },
  { name: "Bandemail", cost: 75, damage: 0, armor: 4 },
  { name: "Platemail", cost: 102, damage: 0, armor: 5 },
];

const rings = [
  // None
  { name: "Bare", cost: 0, damage: 0, armor: 0 },
  { name: "Bare", cost: 0, damage: 0, armor: 0 },
  { name: "Damage +1", cost: 25, damage: 1, armor: 0 },
  { name: "Damage +2", cost: 50, damage: 2, armor: 0 },
  { name: "Damage +3", cost: 100, damage: 3, armor: 0 },
  { name: "Defense +1", cost: 20, damage: 0, armor: 1 },
  { name: "Defense +2", cost: 40, damage: 0, armor: 2 },
  { name: "Defense +3", cost: 80, damage: 0, armor: 3 },
];

function beats(damage, armor) {
  const player = { hp: 100, damage: damage, armor: armor };
  const boss = {
    hp: Number(input.at(0).split(":").at(1)),
    damage: Number(input.at(1).split(":").at(1)),
    armor: Number(input.at(2).split(":").at(1)),
  };
  let i = 0;
  while (player.hp > 0 && boss.hp > 0) {
    if (i % 2 == 0) {
      boss.hp -= player.damage - boss.armor;
    } else {
      player.hp -= boss.damage - player.armor;
    }
    i++;
  }
  return player.hp > boss.hp ? true : false;
}

let min = Infinity;
let max = -Infinity;
for (const weapon of weapons) {
  for (const armor of armors) {
    for (const ring1 of rings) {
      for (const ring2 of rings) {
        // skip if we got the same ring
        if (ring1.name === ring2.name) continue;
        const cost = weapon.cost + armor.cost + ring1.cost + ring2.cost;
        if (
          beats(
            weapon.damage + ring1.damage + ring2.damage,
            armor.armor + ring1.armor + ring2.armor
          )
        ) {
          if (cost <= min) min = cost;
        } else {
          if (cost >= max) max = cost;
        }
      }
    }
  }
}

console.log(min);
// 139 ... to low
console.log(max);
