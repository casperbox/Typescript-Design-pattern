abstract class Character {
    public character: String;
    public weapon: WeaponBehavior = new KnifeBehavior();  
    constructor(gameChar: String) {
        this.character = gameChar;
        console.log(`this is the ${this.character} character with weapon knife`);
    }

    useWeapon(weapon: WeaponBehavior): void{
        this.weapon = weapon;
        this.weapon.use();
    }

}
