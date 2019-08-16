abstract class Duck{
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor(flyBehavior, quackBehavior){
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }

    abstract display();
    public performFly() {
        this.flyBehavior.fly();
    }

    public performQuack(){
        this.quackBehavior.quack();
    }

    public swim(){
        console.log("All Ducks float, even Decoys!");
    }
}