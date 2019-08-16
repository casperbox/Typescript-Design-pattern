class FlyWithWings implements FlyBehavior{
    public fly(){
        console.log("I'm flying!!!");
    }
}

class FlyNoWay implements FlyBehavior{
    public fly(){
        console.log("I can't fly!!!");
    }
}