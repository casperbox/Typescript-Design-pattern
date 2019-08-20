abstract class CondimentDecorator1{
    public beverage1: Beverage1;

    abstract getDescription(): string;

    getSize(){
        return this.beverage1.getSize();
    }

}

class Mocha1 extends CondimentDecorator1{
    beverage: Beverage;
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number{
        var cost = this.beverage.cost() + 0.20;
        if(this.getSize() == "Small"){
            cost += 0.10;
        }
        if(this.getSize() == "Medium"){
            cost += 0.20;
        }
        if(this.getSize() == "Large"){
            cost += 0.30;
        }
        return cost;
    }
}

class SteamedMilk1 extends CondimentDecorator1{
    beverage: Beverage
    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Steamed Milk";
    }

    cost(): number{
        var cost = this.beverage.cost() + 0.10;
        if(this.getSize() == "Small"){
            cost += 0.10;
        }
        if(this.getSize() == "Medium"){
            cost += 0.20;
        }
        if(this.getSize() == "Large"){
            cost += 0.30;
        }
        return cost;
    }
}

class Soy1 extends CondimentDecorator1{
    beverage: Beverage;

    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number{
        var cost = this.beverage.cost() + .15;
        if(this.getSize() == "Small"){
            cost += 0.10;
        }
        if(this.getSize() == "Medium"){
            cost += 0.20;
        }
        if(this.getSize() == "Large"){
            cost += 0.30;
        }
        return cost;
    }
}

class Whip1 extends CondimentDecorator1{
    beverage: Beverage;

    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string{
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number{
        var cost = this.beverage.cost() + 0.10;
        if(this.getSize() == "Small"){
            cost += 0.10;
        }
        if(this.getSize() == "Medium"){
            cost += 0.20;
        }
        if(this.getSize() == "Large"){
            cost += 0.30;
        }
        return cost;
    }
}