function setup() {
    createCanvas(400, 400); 
  }

let squareY = 200;
let squareX = 200;

function draw() {
    background(0);
    rect(squareX, squareY, 50, 50);
    fill(255, 0, 0);
  }

function keyPressed() {
    //derecha 
    if (keyCode === RIGHT_ARROW) {
        //Si la tecla derecha está presionada, aumenta la posición `x` del cuadro.
        squareX += 10
    };
    //abajo
    if (keyCode === DOWN_ARROW) {
        //Si la tecla abajo está presionada, aumenta la posición `y` del cuadro.
        squareY += 10
    };
    //izquierda
    if (keyCode === LEFT_ARROW) {
        //Si la tecla izquierda está presionada, disminuye la posición `x` del cuadro.
        squareX -= 10
    };
    //arriba
    if (keyCode === UP_ARROW) {
        //Si la tecla arriba está presionada, disminuye la posición `y` del cuadro.
        squareY -= 10
    }
    //Habilita la capacidad del cuadrado para saltar al presionar la tecla 
    //de espacio y asegúrate de que vuelva a descender como si estuviera bajo 
    //la influencia de la gravedad
    //if (keyCode === BACKSPACE){}
}

class Cuadrado {
    constructor(lineaX, lineaY, squareH, squareW){
        this.lineaX = lineaX;
        this.lineaY = lineaY;
        this.squareH = squareH;
        this.squareW = squareW
    }

    draw(lineaX, lineaY, squareW, squareH, color) {
        rect(lineaX, lineaY, squareW, squareH);
        fill(color);
      }

}
const cuadrado1 = new Cuadrado(200, 200, 50, 50);

//Intenta crear objetos con los que el cuadrado pueda chocar
const cuadrado2 = new Cuadrado(100, 100, 50, 50);
cuadrado2.draw(100, 100, 50, 50, (0, 255, 0)); 
