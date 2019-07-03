var player = document.getElementById("car");
let topStyle1 = document.getElementById("lane1-opponent1");
let topStyle3 = document.getElementById("lane1-opponent3");


let laneCount = 2;
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 37) {
        if (laneCount == 2) {
            player.style.left = '-180px';
            laneCount = 1;
        }
        else if (laneCount == 3) {
            player.style.left = '90px';
            laneCount = 2;
        }
    }

    if (e.keyCode == 39) {
        if (laneCount == 2) {
            player.style.left = '350px';
            laneCount = 3;
        }
        else if (laneCount == 1) {
            player.style.left = '80px';
            laneCount = 2;
        }
    }

    if (e.keyCode == 38){
        
    }
})


var oppo1 = 0;

let opponet1 = setInterval(function () {
    oppo1 += 10;
    topStyle1.style.top = oppo1 + 'px';
    // console.log(topStyle1.getBoundingClientRect());
    // console.log(topStyle1.offsetTop);
    if (oppo1 >= 550) {
        oppo1 = 0;
    }

    collideleft(topStyle1,player);
    

}, 100);

var oppo2 = 0;
let topStyle2;

var opponent2 = setInterval(function(){
    oppo2 += 5;

    topStyle2 = document.getElementById("lane1-opponent2");

    topStyle2.style.top= oppo2 + 'px';

    if (oppo2 >= 550){

        oppo2 = 0;
    }
    collideright(topStyle2,player);
}, 100);


var oppo3 = 0;

var opponent3 = setInterval(function(){
    oppo3 += 10;

    topStyle3 = document.getElementById("lane1-opponent3");
    topStyle3.style.top = oppo3 + 'px';

    if (oppo3 >=550){
        oppo3 = 0;
    }
    collidecenter(topStyle3,player)
},30)

function collideleft(topStyle1,player){
    let oppoTop1 = topStyle1.offsetTop;
    let oppoHeight1 = topStyle1.clientHeight;
    

    let playerLeft = player.offsetLeft;
    let playerRight = player.offsetleft;

    let total1 = oppoTop1 + oppoHeight1;

    if(total1 >= 500 && playerLeft == 87 ){
        alert("Game Over");
        clearInterval(opponet1);
    }

}

function collideright(topStyle2,player){
    let oppoTop2 = topStyle2.offsetTop;
    let oppoHeight2 = topStyle1.clientHeight;

    let playerRight = player.offsetLeft;

    let total2 = oppoTop2 + oppoHeight2;

    if (total2 >= 495 && playerRight == 616){
        alert("Game Over");
        clearInterval(opponet2);
    }
}

function collidecenter(topStyle3,player){
    let oppoTop3 = topStyle3.offsetTop;
    let oppoHeight3 = topStyle3.clientHeight;

    let playerCenter = player.offsetLeft;

    let total3 = oppoTop3 + oppoHeight3;

    if (total3 >= 500 && playerCenter == 347){
        alert("Game Over");
        clearInterval(opponent3);
    }
}