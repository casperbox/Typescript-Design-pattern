class AxeBehavior implements WeaponBehavior{
    use(){
        console.log("Axe is working...");
    }
}

class BowArrowBehavior implements WeaponBehavior{
    use(){
        console.log("Bow & Arrow is working...")
    }
}

class KnifeBehavior implements WeaponBehavior{
    use(){
        console.log("Knife is working...")
    }
}

class SwortBehavior implements WeaponBehavior{
    use(){
        console.log("Swort is working...")
    }
}