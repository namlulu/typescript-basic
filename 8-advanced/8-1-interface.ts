{
  // 데이터의 모습
  type PositionType = {
    x: number;
    y: number;
  };

  // 규격
  interface PositionInterface {
    x: number;
    y: number;
  }

  // only interface can be merged
  interface PositionInterface {
    z: number;
  }

  // obj
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  // extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  // type can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name'];
  type NumberType = number;
  type Direction = 'left' | 'right' | 'up' | 'down';
}
