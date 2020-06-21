// boolean
var isCool = true;
// number
var age = 56;
// string
var myName = "Phong";
var favouriteQuote = "I'm " + age + " years old";
// arrays
var pets = ["cat", "dog", "elephant"];
var pets2 = ["lion", "tiger"];
// object
var wizard = {
    a: "John"
};
// null & undefined
var meh = undefined;
var boo = null;
// tuple
var basket = ["basketball", 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// any -- Be Careful
var whatever = "hello";
whatever = 6;
// void
var sing = function () {
    console.log("Hello");
};
// never
var error = function () {
    throw Error("Oops");
};
var fightRobotArmy = function (robots) {
    console.log("Fight");
};
fightRobotArmy({ count: 1, type: "dragon" });
var fightRobotArmy2 = function (robots) {
    console.log("Fight");
};
var dog = {};
dog.count;
// function
var fightRobotArmy3 = function (robots) {
    console.log("Fight");
};
var fightRobotArmy4 = function (robots) {
    console.log("Fight");
    return 5;
};
// classes
var Animal = /** @class */ (function () {
    // public sing: string = 'lalala';
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAWR');
lion.greet();
// union
var confused = "hello";
confused = 4;
