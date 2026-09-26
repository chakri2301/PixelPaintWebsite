var currentColor = "#000000"
var board = document.getElementById("board");
var finalHTML = "<div>";
for (var i = 0; i < 256; i++) {
    finalHTML += "<span class='tile' id='t" + i + "' onclick='ChangeColor(" + i + ")'>0</span>"
    if (i % 16 == 15) {
        finalHTML += "</div><div>"
    }
}
finalHTML += "</div>"
board.innerHTML = finalHTML;


function onColorInput(e) {
    console.log(e);
    currentColor = e;
}
function ChangeColor(idx) {
    var tile = document.getElementById("t" + idx);
    tile.style.backgroundColor = currentColor;
}
function Clear(){
    for(var i=0;i<256;i++){
        var tile = document.getElementById("t" + i);
    tile.style.backgroundColor = "#ffffff";
    }
}