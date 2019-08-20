class Expresso1 extends Beverage1{
    constructor(size: string){
        super();
        this.setSize(size);
        this.description = "Expresso";
    }

    cost(): number{
        return 0.79;
    }

}


class HouseBlend1 extends Beverage1{
    constructor(size: string){
        super();
        this.setSize(size);
        this.description = "House Blend Coffee";
    }

    cost(): number{
        return 0.89;
    }
}

class DarkRoast1 extends Beverage1{
    constructor(size: string){
        super();
        this.setSize(size);
        this.description = "Dark Roast Coffee";
    }

    cost(): number{
        return 0.99;
    }
}

class Decaf1 extends Beverage1{
    constructor(size: string){
        super();
        this.setSize(size);
        this.description = "Decaf";
    }

    cost(): number{
        return 1.05;
    }
}