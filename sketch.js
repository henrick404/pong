function setup() {
    createCanvas(1500, 900);
  }
  
  function draw() {
    background(0);
    criarBolinha();
    function criarBolinha(){
        circle(xBolinha,yBolinha,diametro);
    }
   xBolinha += velocidade;
    if(xBolinha>width|xBolinha<0){
        velocidade*=-1;
    }







  }




let xBolinha = 750;
let yBolinha = 450;
let diametro = 50;
let velocidade= 15;
 