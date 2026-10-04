var currentColor = "#000000";
var isDraw = false;
var picker = document.getElementById('colorPicker');
function onColorInput(e) {
    console.log(e);
    currentColor = e;
}
function ChangeColor(idx) {
    var tile = document.getElementById("t" + idx);
    tile.style.backgroundColor = currentColor;
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
    for (var i = 0; i < 64; i++) {
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
        var tile = document.getElementById("t" + idx);
        tile.style.backgroundColor = currentColor;
    }
}
// Use programaric solutions
// Don't waste water
html = "";
for (var i = 0; i < 64; i++) {
    if (i % 8 == 0) {
        html += '<br>'
    }
    html += '<span class="tile" id="t' + i + '" onmousemove="OnTileHover(' + i + ')" onclick="ChangeColor(' + i + ')">0</span>\n';
}
console.log(html);