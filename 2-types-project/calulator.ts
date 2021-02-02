type Command = 'add' | 'substract' | 'mulitply' | 'divide' | 'remainder';
function calculate(arg: string, numOne: number, numTwo: number): number {
  switch (arg) {
    case 'add': {
      return numOne + numTwo;
    }
    case 'substract': {
      return numOne - numTwo;
    }
    case 'multiply': {
      return numOne * numTwo;
    }
    case 'divide': {
      return numOne / numTwo;
    }
    case 'remainder': {
      return numOne % numTwo;
    }
    default:
      throw new Error('unknown command');
  }
}

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 3, 1));
console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('remainder', 5, 2));
