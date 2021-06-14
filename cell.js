class cell{
    constructor(row, col){
        this.row = row;
        this.col = col;
        this.bombs = int(random(0, 9))
        this.flag = false;
        this.reveal = false;
        this.isBombed = false;
    }

    reveal(){
        if(this.reveal) return true;
    }

    draw(){
        
    }
}