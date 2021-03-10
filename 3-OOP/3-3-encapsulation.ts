{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public, private, protect
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not Enough Coffee Beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  //   const maker = new CoffeeMaker(32);
  const maker = CoffeeMaker.makeMachine(100);
  maker.fillCoffeeBeans(10);
  console.log(maker.makeCoffee(2));

  // ------------------------------------- getter, setter
  // constructor only activate once. so you need to use getter and setter

  class User {
    private internalAage = 4;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(text: string) {
      const name: string[] = text.split(' ');
      this.firstName = name[0];
      this.lastName = name[1];
    }

    get age(): number {
      return this.internalAage;
    }

    set age(num: number) {
      if (num < 0) {
        throw Error('age must over 0');
      }
      this.internalAage = num;
    }

    // if you use private, public ,protect you don't repeat delcare variables again.
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User('Steve', 'Jobs');
  console.log(user);
  user.age = 6;
  user.fullName = 'senguk lee';
  console.log(user.age);
  console.log(user.fullName);
}
