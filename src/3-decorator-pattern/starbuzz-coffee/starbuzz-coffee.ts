class StarbuzzCoffee{
    constructor(){
        var beverage: Beverage = new Expresso();
        console.log(`${beverage.getDescription()} $${beverage.cost()}`);

        var beverage2: Beverage = new DarkRoast();
        beverage2 = new Mocha(beverage2);
        beverage2 = new Mocha(beverage2);
        beverage2 = new Whip(beverage2);
        console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

        var beverage3: Beverage = new HouseBlend();
        beverage3 = new Soy(beverage3);
        beverage3 = new Mocha(beverage3);
        beverage3 = new Whip(beverage3);
        console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);
    }
}