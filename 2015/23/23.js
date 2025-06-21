const input = (await Deno.readTextFile("./23.txt")).split("\r\n");

class VM {
  a;
  b;
  pc = 0;
  instructions = [];

  constructor(a, b, instructions) {
    this.a = a;
    this.b = b;
    this.instructions = instructions;
  }

  run() {
    for (; this.pc < this.instructions.length && this.pc >= 0; ) {
      const inst = this.getInstruction(this.instructions.at(this.pc));
      switch (inst) {
        case "hlf": {
          this.hlf(this.getOperands().at(0));
          break;
        }
        case "tpl": {
          this.tpl(this.getOperands().at(0));
          break;
        }
        case "inc": {
          this.inc(this.getOperands().at(0));
          break;
        }
        case "jmp": {
          const ops = this.getOperands();
          this.jmp(Number(ops.at(0)));
          break;
        }
        case "jie": {
          const ops = this.getOperands();
          this.jie(ops.at(0), Number(ops.at(1)));
          break;
        }
        case "jio": {
          const ops = this.getOperands();
          this.jio(ops.at(0), Number(ops.at(1)));
          break;
        }
      }
    }
  }

  getInstruction() {
    return this.instructions.at(this.pc).substring(0, 3);
  }

  getOperands() {
    return this.instructions.at(this.pc).substring(4).split(", ");
  }

  hlf(r) {
    if (r === "a") {
      this.a = this.a / 2;
    } else {
      this.b = this.b / 2;
    }
    this.pc++;
  }

  tpl(r) {
    if (r === "a") {
      this.a = this.a * 3;
    } else {
      this.b = this.b * 3;
    }
    this.pc++;
  }

  inc(r) {
    if (r === "a") {
      this.a = this.a + 1;
    } else {
      this.b = this.b + 1;
    }
    this.pc++;
  }

  jmp(offset) {
    this.pc = this.pc + offset;
  }

  jie(r, offset) {
    const v = r === "a" ? this.a : this.b;
    if (v % 2 == 0) {
      this.pc = this.pc + offset;
    } else {
      this.pc++;
    }
  }

  jio(r, offset) {
    const v = r === "a" ? this.a : this.b;
    if (v == 1) {
      this.pc = this.pc + offset;
    } else {
      this.pc++;
    }
  }
}

const p1 = new VM(0, 0, input);
p1.run();
console.log(p1.b);

const p2 = new VM(1, 0, input);
p2.run();
console.log(p2.b);
