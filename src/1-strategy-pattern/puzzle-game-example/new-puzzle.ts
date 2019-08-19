class NewPuzzle{

    king: Character;
    queen: Character;
    knight: Character;
    bishop: Character;

    constructor(){
        this.king = new King();
        this.queen = new Queen();
        this.knight = new Knight();
        this.bishop = new Bishop();
        this.king.useWeapon(new SwortBehavior());
        this.queen.useWeapon(new KnifeBehavior());
        this.knight.useWeapon(new BowArrowBehavior());
        this.bishop.useWeapon(new AxeBehavior());
    }
}