{
  // type Assertion
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  // 이렇게 하면 안됨;;
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2);

  const button = document.querySelector('.click')!;
  button.nodeValue;
}
