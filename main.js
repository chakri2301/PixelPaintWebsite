var currentColor = "#000000";
function onColorInput(e) {
    console.log(e);
    currentColor = e;
}
function ChangeColor(idx) {
    var tile = document.getElementById("t" + idx);
    tile.style.backgroundColor = currentColor;
}