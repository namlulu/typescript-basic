{
  // Type Inference
  let text: string = 'hello';
  function print(message = 'hi'): void {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);
}
