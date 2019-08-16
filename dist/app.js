var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AppClass = /** @class */ (function () {
    function AppClass() {
        this.king = new King().useWeapon(new SwortBehavior());
        this.queen = new Queen().useWeapon(new KnifeBehavior());
        this.knight = new Knight().useWeapon(new BowArrowBehavior());
    }
    ;
    ;
    return AppClass;
}());
var AxeBehavior = /** @class */ (function () {
    function AxeBehavior() {
    }
    AxeBehavior.prototype.use = function () {
        console.log("Axe is working...");
    };
    return AxeBehavior;
}());
// import { Character } from './character';
// export class Bishop extends Character{
//     constructor(){
//         super("Bishop");
//     }
// }
var BowArrowBehavior = /** @class */ (function () {
    function BowArrowBehavior() {
    }
    BowArrowBehavior.prototype.use = function () {
        console.log("Bow & Arrow is working...");
    };
    return BowArrowBehavior;
}());
var Character = /** @class */ (function () {
    function Character(gameChar) {
        this.weapon = new KnifeBehavior();
        this.character = gameChar;
        console.log("this is the " + this.character + " character with weapon knife");
    }
    Character.prototype.useWeapon = function (weapon) {
        this.weapon = weapon;
        this.weapon.use();
    };
    return Character;
}());
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super.call(this, "King") || this;
    }
    return King;
}(Character));
var KnifeBehavior = /** @class */ (function () {
    function KnifeBehavior() {
    }
    KnifeBehavior.prototype.use = function () {
        console.log("Knife is working...");
    };
    return KnifeBehavior;
}());
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super.call(this, "Knight") || this;
    }
    return Knight;
}(Character));
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super.call(this, "Queen") || this;
    }
    return Queen;
}(Character));
var SwortBehavior = /** @class */ (function () {
    function SwortBehavior() {
    }
    SwortBehavior.prototype.use = function () {
        console.log("Swort is working...");
    };
    return SwortBehavior;
}());
var MiniDuckSimulator = /** @class */ (function () {
    function MiniDuckSimulator() {
        this.mallard = new MallardDuck();
        this.mallard.display();
        this.mallard.performFly();
        this.mallard.performQuack();
        this.mallard.swim();
    }
    return MiniDuckSimulator;
}());
var Duck = /** @class */ (function () {
    function Duck(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.swim = function () {
        console.log("All Ducks float, even Decoys!");
    };
    return Duck;
}());
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log("I'm flying!!!");
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log("I can't fly!!!");
    };
    return FlyNoWay;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = this;
        var quackBehavior = new Quack();
        var flyBehavior = new FlyWithWings();
        _this = _super.call(this, flyBehavior, quackBehavior) || this;
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log("I'm a mallard Duck");
    };
    return MallardDuck;
}(Duck));
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log("Quack");
    };
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log("<< Silence >>");
    };
    return MuteQuack;
}());
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log("squeak");
    };
    return Squeak;
}());
