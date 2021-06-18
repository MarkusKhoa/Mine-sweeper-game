const assets = 'img/';
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
    bomb_flag: 'bomb_flag.png',
    bomb_smile: 'bomb_smile.png',
    bomb_red: 'bomb_red.png',
    bomb_wrong: 'bomb_wrong.png',
    clock: 'clock.png',
    sobom: 'so-bomb.png',
    scare_face: 'scare_face.png',
}

let img_nums = [];
let img_untouched, img_bomb_flag, img_bomb, img_bomb_red, img_bomb_wrong;

let imageSize = 70;
const rows = 5;
const cols = 10;
let bombs = Math.floor(rows * cols * 0.05);
let bombs_left = bombs;
let width, height, board;

function preload() {
    for(let key in img_names){
        loadImage(assets + img_names[key], img => {
            img.resize(imageSize, imageSize);
            if(+key >= 0 && +key <= 8){
                img_nums[+key] = img;
            }
            else if(key === 'not_touch'){
                img_untouched = img;
            }
            else if(key === 'bomb_flag'){
                img_bomb_flag = img;
            }
            else if(key === 'bomb'){
                img_bomb = img;
            }
            else if(key === 'bomb_red'){
                img_bomb_red = img;
            }
            else if(key === 'bomb_wrong'){
                img_bomb_wrong  = img;
            }
        });
    }
}

function setup(){
    width = windowWidth - 30;
    height = windowHeight - 30;
    createCanvas(width, height);
    init();
    console.log(bombs);
}

function draw() {
    background(25);
    drawBoard();
    noLoop();
}

function init(){
    this.board = [];
    for (let row = 0; row < rows; row++) {
        this.board[row] = [];
        for (let col = 0; col < cols; col++) {
            this.board[row][col] = new Cell(row, col);
        }
    }
}

function drawBoard() {
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            this.board[row][col].draw();
        }
    }
}