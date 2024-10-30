let squareY = 200;
let squareX = 200;
let obstacle1;
let obstacle2;

function setup() {
    createCanvas(400, 400); 
    //Intenta crear objetos con los que el cuadrado pueda chocar
    obstacle1 = new Obstacle(100, 300, 50, 50, 0, 45, 79);
  }

function draw() {
    background(0);
    fill(255, 0, 0);
    rect(squareX, squareY, 50, 50);
    obstacle1.display();
  }

function keyPressed() {
    //Si la tecla derecha está presionada, aumenta la posición `x` del cuadro.
    if (keyCode === RIGHT_ARROW) {
        squareX += 10
    };
    //Si la tecla abajo está presionada, aumenta la posición `y` del cuadro.
    if (keyCode === DOWN_ARROW) {
        squareY += 10
    };
    //Si la tecla izquierda está presionada, disminuye la posición `x` del cuadro.
    if (keyCode === LEFT_ARROW) {
        squareX -= 10
    };
    //Si la tecla arriba está presionada, disminuye la posición `y` del cuadro.
    if (keyCode === UP_ARROW) {
        squareY -= 10
    }
    //Habilita la capacidad del cuadrado para saltar al presionar la tecla 
    //de espacio y asegúrate de que vuelva a descender como si estuviera bajo 
    //la influencia de la gravedad
    //if (keyCode === BACKSPACE){}
}
class Obstacle {
    constructor(x, y, w, h, r,g,b){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b

    }
    display(){
        fill(this.r,this.g,this.b);
        rect(this.x, this.y, this.w, this.h);
    }
}
