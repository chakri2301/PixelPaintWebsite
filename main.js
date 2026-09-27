var currentColor = "#000000";
var downloadEle = document.getElementById("DownloadButton");
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