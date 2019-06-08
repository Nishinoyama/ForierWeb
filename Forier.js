

// 初期変数
// 体裁関係
var width = 300;
var height = 300;

var scaleLeft = 20;
var scaleTop = 20;
var scaleBorder = 20;
var scaleWidth = 0;
var scaleHeight = 0;

// 波形データ関連
var DataLength = 12;
var Pol = new Array;
var FTPol = new Array;

// キャンバス
var canv;


onload = function() {
    initVaribales();
    showScale();
} 

// 大域変数の初期化
function initVaribales() {
    canv = document.getElementById("FGraph");
    width = canv.clientWidth;
    height = canv.clientHeight;

    scaleLeft = 20;
    scaleTop = 0;
    scaleBorder = 20;
    scaleWidth = 890;
    scaleHeight = height - (scaleTop+scaleBorder)*2;

    DataLength = 32;
    Pol = new Array(DataLength);
    FTPol = new Array(DataLength*2);
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
    ctx.beginPath();

    ctx.lineWidth = 1;
    ctx.lineCap = "square";
    ctx.strokeStyle = "red";
    var heightCenter = scaleHeight / 2;
    var top = scaleTop + scaleBorder;
    var left = scaleLeft + scaleBorder;
    ctx.moveTo( left , top + heightCenter - pol[0] );
    for (var index = 1; index < pol.length; index++) {
        const term = pol[index];
        var x = ( scaleWidth )/(pol.length-1);
        ctx.lineTo( left+index*x , top + heightCenter - term );
    }
    ctx.stroke();

    showScale();

}

function showScale(){
    var scalectx = canv.getContext("2d");
    var left = scaleLeft + scaleBorder;
    var top = scaleTop + scaleBorder;
    scalectx.strokeStyle = "balck";
    scalectx.moveTo(left,top)
    scalectx.lineTo(left,top + scaleHeight )
    scalectx.moveTo(left,top + scaleHeight / 2 )
    scalectx.lineTo(left+scaleWidth,top + scaleHeight / 2 )
    scalectx.stroke();

}

// polにフーリエ変換を施す
function ForierTransformation( pol ) {
    FTPol = new Array(pol.length);
    for (let index = 0; index < FTpol.length; index++) {
        const term = FTpol[index];
    }
}

var index = 44;
function playBinInner() {
    
    Pol = new Array(512)
    for( var i = 0; i < 512; i++ ){
        Pol[i] = binData.charCodeAt(i*2+index)*256 + binData.charCodeAt(i*2+index+1); // チャンネル１
        // Pol[i] += data.charCodeAt(i*3+index)*256 + data.charCodeAt(i*4+index+1); // チャンネル２
        if( Pol[i] > 65536/2 ) Pol[i] -= 65536;
        Pol[i] = 1.0 * Pol[i]/300 ; 
    }

    if( index % 100 == 0){
        console.log( index );
    }

    index+=256;

    ShowPol(Pol);


}

function playBin(){
    setInterval( playBinInner, 10 );
}
