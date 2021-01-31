{
  // dont't use
  var age = 5;
  age = 1;

  // okay
  let name = `hello`;
  name = `hi`;
}
{
  //   원시
  const num: number = -7;
  const str: string = 'hi';
  const boal: boolean = false;

  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return 1;
  }

  let person: string | null;

  //안 쓰는 게 좋음
  let noSure: unknown = 0;
  noSure = 'hd';

  //안 쓰는 게 좋음
  let anything: any = 0;
  anything = '다됨';

  function print(): void {
    console.log('hello');
    return;
  }

  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }

  // 오브젝트 다 되기 때문에 조심
  let obj: object;
  function accept(obj: object) {}
}
