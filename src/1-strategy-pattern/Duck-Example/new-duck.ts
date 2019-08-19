class MiniDuckSimulator{
    mallard: Duck;
    constructor(){
        this.mallard = new MallardDuck();
        this.mallard.display();
        this.mallard.performFly();
        this.mallard.performQuack();
        this.mallard.swim();
    }
}