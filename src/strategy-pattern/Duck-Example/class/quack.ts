class Quack implements QuackBehavior{
    quack(){
        console.log("Quack");
    }
}

class MuteQuack implements QuackBehavior{
    quack(){
        console.log("<< Silence >>");
    }
}

class Squeak implements QuackBehavior{
    quack(){
        console.log("squeak");
    }
}