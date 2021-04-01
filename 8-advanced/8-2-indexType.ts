{
  const obj = {
    name: 'seunguk',
  };
  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];
  const text: Name = 'Hi';

  type Gender = Animal['gender'];

  type Keys = keyof Animal; // name age gender
  const key: Keys = 'age';
}
