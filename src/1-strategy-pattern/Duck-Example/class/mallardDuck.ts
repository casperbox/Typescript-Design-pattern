class MallardDuck extends Duck{
    constructor(){
        var quackBehavior = new Quack();
        var flyBehavior = new FlyWithWings();
        super(flyBehavior, quackBehavior);
    }

    display(){
        console.log("I'm a mallard Duck")
    }
}