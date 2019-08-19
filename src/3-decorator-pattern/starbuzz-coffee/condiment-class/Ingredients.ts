abstract class CondimentDecorator extends Beverage{
    public abstract getDescription(): string;
}

class Mocha extends CondimentDecorator{
    beverage: Beverage;
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number{
        return  this.beverage.cost() + 0.20;
    }
}

class SteamedMilk extends CondimentDecorator{
    beverage: Beverage
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Steamed Milk";
    }

    cost(): number{
        return this.beverage.cost() + 0.10;
    }
}

class Soy extends CondimentDecorator{
    beverage: Beverage;

    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number{
        return this.beverage.cost() + .15;
    }
}

class Whip extends CondimentDecorator{
    beverage: Beverage;

    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number{
        return this.beverage.cost() + 0.10;
    }
}