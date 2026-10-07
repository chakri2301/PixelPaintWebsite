class Tile {
  id;
  spanEle;
  constructor(id) {
    this.id = id;
    this.spanEle = document.getElementById(id);
  }
  SetColor(hashCode) {
    this.spanEle.style.backgroundColor = hashCode;
    console.log("Set the color of " + this.id + " to " + hashCode);
  }
  GetColor() {
    return this.spanEle.style.backgroundColor;
  }
}
