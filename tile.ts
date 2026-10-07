class Tile {
    id: string;
    spanEle: HTMLSpanElement;
    constructor(id : string) {
        this.id = id;
        this.spanEle = document.getElementById(id) as HTMLSpanElement;
    }
    SetColor(hashCode: string){
        this.spanEle.style.backgroundColor = hashCode;
        console.log("Set the color of " + this.id + " to " + hashCode);
    }
    GetColor(): string{
        return this.spanEle.style.backgroundColor
    }
}