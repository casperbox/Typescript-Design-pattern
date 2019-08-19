class Expresso extends Beverage{
    constructor(){
        super();
        this.description = "Expresso";
    }

    cost(): number{
        return 1.99;
    }
}

class HouseBlend extends Beverage{
    constructor(){
        super();
        this.description = "House Blend Coffee";
    }

    cost(): number{
        return 0.89;
    }
}

class DarkRoast extends Beverage{
    constructor(){
        super();
        this.description = "Dark Roast Coffee";
    }

    cost(): number{
        return 0.99;
    }
}

class Decaf extends Beverage{
    constructor(){
        super();
        this.description = "Decaf";
    }

    cost(): number{
        return 1.05;
    }
}