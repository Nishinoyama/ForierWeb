
var binData;

function getBinFile() {
    var wavFile = document.getElementById("targetFile").files[0];
    var reader = new FileReader();
    reader.onload = function(evt){
        var allData = evt.target.result;
        binData = allData;
        playBin();
    }
    reader.readAsBinaryString(wavFile);
}
