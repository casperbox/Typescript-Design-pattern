enum Size { Small, Medium, Large }

abstract class Beverage1 {
    public description: string = "Unknown Beverage";
    public size: string;

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;

    setSize(size: string) {
        this.size = size;
    }

    getSize(): string{
        return this.size;
    }

}