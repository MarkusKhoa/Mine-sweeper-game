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
        if(this.isBombed) return false;
        this.reveal = true;
        return true;
    }

    draw(){
        image(img_nums[this.bombs], this.row * imageSize, this.col * imageSize);
    }
}