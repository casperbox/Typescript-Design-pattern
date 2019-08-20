class StarbuzzCoffeeSize{
    constructor(){
        var beverage: Beverage1 = new Expresso1("Medium");
        console.log(`${beverage.getDescription()} $${beverage.cost()}`);

        var beverage2: Beverage1 = new DarkRoast1("Large");
        // beverage2 = new Mocha1(beverage2);
        // beverage2 = new Mocha1(beverage2);
        // beverage2 = new Whip1(beverage2);
        console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

        var beverage3: Beverage1 = new HouseBlend1("Small");
        // beverage3 = new Soy1(beverage3);
        // beverage3 = new Mocha1(beverage3);
        // beverage3 = new Whip1(beverage3);
        console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);
    }
}