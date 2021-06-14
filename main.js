const assets = '/img';
const img_names = {
    0: 'number-0.png',
    1: 'number-1.png',
    2: 'number-2.png',
    3: 'number-3.png',
    4: 'number-4.png',
    5: 'number-5.png',
    6: 'number-6.png',
    7: 'number-7.png',
    8: 'number-8.png',
    bomb: 'bomb.png',
    not_touch: 'square_PNG95.png',
    bomb_flag: 'bombflag.png',
    bomb_smile: 'bomb_smile.png',
    bomb_red: 'bomb_red.png',
    bomb_wrong: 'bomb_wrong.png',
    clock: 'clock.png',
    sobom: 'sobom.png',
    scare_face: 'scare_face.png',
}

function preload() {
    for(let key in img_names){
        loadImage(assets, img_names[key], img ={
            img.resize(imageSize, imageSize);
            images.push({key: key, image: img});
        });
    }
}

function setup(){
    width = windowWidth - 30;
    height = windowHeight - 30;
    createCanvas(width, height);
    init();
}

function draw() {
    background(255);
    drawBoard();
    noLoop();
}

function init(){
    this.board = [];
    for (let row = 0; row < rows; i++) {
        this.board[row] = [];
        for (let col = 0; col < cols; j++) {
            this.board[row][col] = new Cell(i, j);
        }
    }
}

function drawBoard() {
    for(let row = 0; row < rows; i++) {
        for(let col = 0; col < cols; j++) {
            this.board[row][col].draw();
        }
    }
}