

// 初期変数
var width = 300;
var height = 300;


var Pol = new Array(32);
var FTPol = new Array(16);

onload = function() {
    initVaribales();
    showScale();
} 

// 大域変数の初期化
function initVaribales() {
    var canv = document.getElementById("FGraph");
    width = canv.clientWidth;
    height = canv.clientHeight;
}

// 多項式の生成
function GeneratePol( pol ){
    for (let index = 0; index < pol.length; index++) {
        pol[index] = Math.round(Math.random() * 200 - 100);
    }
}

// 多項式のグラフ表示
function ShowPol( pol ){
    // var PolDiv = document.getElementById('PolRaw');
    // PolDiv.innerHTML = '<div id=Pol>'
    // for (var index = 0; index < pol.length; index++) {
    //     const term = pol[index];
    //     if( index == 0 ){
    //         PolDiv.innerHTML +=term + ' ';
    //         continue;
    //     }
    //     const plus = term >= 0 ? '+' : '';
    //     PolDiv.innerHTML += plus + term + 'x^' + index + ' ';
    // }
    // PolDiv.innerHTML += '</div>'

    // ここからcanvasの出番
    var c = document.getElementById("FGraph");
    var ctx = c.getContext("2d");
    // ここはおまじない（TODO:ちゃんと理解する）
    ctx.clearRect(0,0,width,height);
    
    var heightCenter = height/2;
    ctx.lineWidth = 2;
    ctx.lineCap = "square";
    ctx.strokeStyle = "red";
    ctx.moveTo( 20, heightCenter - pol[0] );
    for (var index = 1; index < pol.length; index++) {
        const term = pol[index];
        var x = (width-40)/(pol.length-1);
        ctx.lineTo( 20+index*x , heightCenter - term );
    }
    ctx.stroke();

}

function showScale(){

}

// polにフーリエ変換を施す
function ForierTransformation( pol ) {
    FTPol = new Array(pol.length);
    for (let index = 0; index < FTpol.length; index++) {
        const term = FTpol[index];
    }
}
