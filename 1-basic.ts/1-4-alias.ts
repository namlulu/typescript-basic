{
  // Type Alias
  type Text = string;
  const name: Text = 'sean';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'sean',
    age: 26,
  };

  //   String Literal Types
  type Name = 'name';
  let seanName: Name;
  seanName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
