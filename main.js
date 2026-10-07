var currentColor = "#000000";
var isDraw = false;
var picker = document.getElementById('colorPicker');
var Tiles = [];
const width = 16;
const numberOfTiles = width * width;
for (var i = 0; i < numberOfTiles; i++) {
    var newTile = new Tile("t" + i);
    Tiles.push(newTile);
}
console.log(Tiles)
function onColorInput(e) {
    console.log(e);
    currentColor = e;
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
        var tile = document.getElementById("t" + i);
        tile.style.backgroundColor = "white";
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
    if (i % width== 0) {
        html += '<br>'
    }
    html += '<span class="tile" id="t' + i + '" onmousemove="OnTileHover(' + i + ')" onclick="ChangeColor(' + i + ')">' + i + '</span>\n';
}
console.log(html);