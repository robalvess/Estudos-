let xBall = 300;
let yBall = 200;
let dBall = 20;
let rBall = dBall/2;
let vxBall = 6;
let vyBall = 6;

//raquete

let xRaquete = 5;
let yRaquete = 150;
let cRaquete = 10;
let aRaquete = 100;

//oponente

let xOp = 585;
let yOp = 150;
let vyOp;
let chanceDeErrar = 0;

//placar

let meuPontos = 0;
let pontosOp = 0;

//sons

let raquetada;
let ponto;
let trilha;


function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  ball();
  movimento();
  bordas();
  movRaq();
  raquete(xRaquete, yRaquete);
  raquete(xOp, yOp);
  //colisaoRaq();
  colisao(xRaquete, yRaquete);
  colisao(xOp, yOp);
  //movRaqOp();
  incluiPlacar();
  pontua();
  voltaRaq();
  movRaqOpMult();
}

function ball(){
  circle(xBall, yBall, dBall)
}

function movimento(){
  xBall += vxBall;
  yBall += vyBall
}

function bordas(){
  if (xBall - rBall < 0 || xBall + rBall > 600){vxBall *= -1};
  if (yBall + rBall > 400 || yBall - rBall < 0){vyBall *= -1};
}

function raquete(x, y){
  rect(x, y, cRaquete, aRaquete);
}

function movRaq(){
  if (keyIsDown(UP_ARROW)){yRaquete -= 8};
  if (keyIsDown(DOWN_ARROW)){yRaquete += 8};
}

function colisaoRaq(){
  if (xBall - rBall < xRaquete + cRaquete && yBall - rBall < yRaquete + aRaquete &&
     yBall + rBall > yRaquete){vxBall *= -1}
}

function colisao(x,y){
  colidiu =
    collideRectCircle(x,y,cRaquete, aRaquete, xBall, yBall, rBall);
  if (colidiu){vxBall *= -1;
              raquetada.play()}
}

function calculaChanceDeErrar(){
  if(pontosOp > meuPontos){
    chanceDeErrar += 1
    if(chanceDeErrar >=39){
      chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= -1
    if(chanceDeErrar <= 35){
      chanceDeErrar = 35
    }
  }
}

function movRaqOp(){
  vyOp = yBall - yOp - cRaquete / 2 - 30;
  yOp += vyOp + chanceDeErrar;
}

function movRaqOpMult(){
  if (keyIsDown(87)){yOp -= 8};
  if (keyIsDown(83)){yOp += 8};
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130, 10, 40, 20);
  fill(255);
  text(meuPontos, 150, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosOp, 470,26)
}

function pontua(){
  if (xBall  < 10){pontosOp += 1; 
                   ponto.play()
                  }
  if (xBall  > 590){meuPontos += 1; 
                    ponto.play()
                   }
}

function voltaRaq(){
  if(
    yRaquete > 400
    ){
    yRaquete = 0 - aRaquete
  }
  if(
    yRaquete + aRaquete < 0
    ){
    yRaquete = 400
  }
}
  
//AAAAAAAAAAAAAAAAAAAAAAA
