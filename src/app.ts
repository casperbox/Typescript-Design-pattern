class AppClass{
    public king: void;
    public queen: void;;
    public knight: void;;
    constructor(){
        this.king = new King().useWeapon(new SwortBehavior());
        this.queen = new Queen().useWeapon(new KnifeBehavior());
        this.knight = new Knight().useWeapon(new BowArrowBehavior());
    }
    // public bishop = new Bishop().useWeapon(new AxeBehavior());
}