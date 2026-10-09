var currentColor = "#000000";
var isDraw = false;
var picker = document.getElementById('colorPicker');
var Tiles = [];
const width = 16;
const numberOfTiles = width * width;
var currentPaletteColor = 0;
var colorPalette = [];

for (var i = 0; i < 5; i++) {
    var newColor = document.getElementById("c" + i);
    colorPalette.push(newColor);
}
for (var i = 0; i < numberOfTiles; i++) {
    var newTile = new Tile("t" + i);
    Tiles.push(newTile);
}
console.log(Tiles)
function onColorInput(e) {
    console.log(e);
    currentColor = e;
    colorPalette[currentPaletteColor].style.backgroundColor = e;
}
function ColorPaletteSelected(idx) {
    currentPaletteColor = idx;
    currentColor = colorPalette[currentPaletteColor].style.backgroundColor;
    if(currentColor == ""){
        currentColor = "#000000";
    }
    picker.value = currentColor;
}
function ChangeColor(idx) {
    Tiles[idx].SetColor(currentColor);
}
function Shot() {
    html2canvas(document.querySelector("#board")).then(canvas => {
        document.body.appendChild(canvas)
    });
}
function EnableEraser() {
    currentColor = "white";
    picker.value = "white";
}
function Clear() {
    for (var i = 0; i < numberOfTiles; i++) {
        Tiles[i].SetColor("white");
    }
}
function DrawStart() {
    isDraw = true;
}
function DrawEnd() {
    isDraw = false;
}
function OnTileHover(idx) {
    if (isDraw) {
        Tiles[idx].SetColor(currentColor);
    }
}
// Use programaric solutions
// Don't waste water
html = "";
for (var i = 0; i < numberOfTiles; i++) {
    if (i % width == 0) {
        html += '<br>'
    }
    html += '<button class="tile" id="t' + i + '" onclick="ChangeColor(' + i + ')" onmousemove="OnTileHover(' + i + ')">' + i + '</button>\n';
}
console.log(html);