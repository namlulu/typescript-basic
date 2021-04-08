const x = {};
const y = {};
console.log(x);
console.log(y);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  // member level
  this.beans = beans;
}

// protype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
