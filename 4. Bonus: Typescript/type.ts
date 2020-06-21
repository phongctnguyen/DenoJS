// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let myName: string = "Phong";
let favouriteQuote: string = `I'm ${age} years old`;

// arrays
let pets: string[] = ["cat", "dog", "elephant"];
let pets2: Array<string> = ["lion", "tiger"];

// object
let wizard: object = {
  a: "John",
};

// null & undefined
let meh: undefined = undefined;
let boo: null = null;

// tuple
let basket: [string, number] = ["basketball", 5];

// enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: number = Size.Small;

// any -- Be Careful
let whatever: any = "hello";
whatever = 6;

// void
let sing = (): void => {
  console.log("Hello");
};

// never
let error = (): never => {
  throw Error("Oops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight");
};
fightRobotArmy({ count: 1, type: "dragon" });

let fightRobotArmy2 = (
  robots: { count: number; type: string; magic: string },
) => {
  console.log("Fight");
};

// type assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("Fight");
};

let fightRobotArmy4 = (robots: { count: number; type: string; magic: string }): number => {
  console.log("Fight");
  return 5;
};

// classes
class Animal {
  private sing: string = 'lalala';
  // public sing: string = 'lalala';
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal('RAAAAWR');
lion.greet();

// union
let confused: string | number | boolean = "hello";
confused = 4;