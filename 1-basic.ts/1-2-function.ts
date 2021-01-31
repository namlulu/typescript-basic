{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //optional parameter
  function printName(firstname: string, lastname?: string) {
    console.log(firstname);
    console.log(lastname);
  }
  printName('steve', 'toe');
  printName('sex');

  //default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  //rest parameter
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
