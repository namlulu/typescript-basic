{
  // dont't use
  var age = 5;
  age = 1;

  // okay
  let name = `hello`;
  name = `hi`;
}
{
  //   ����
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

  //�� ���� �� ����
  let noSure: unknown = 0;
  noSure = 'hd';

  //�� ���� �� ����
  let anything: any = 0;
  anything = '�ٵ�';

  function print(): void {
    console.log('hello');
    return;
  }

  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }

  // ������Ʈ �� �Ǳ� ������ ����
  let obj: object;
  function accept(obj: object) {}
}
