class Draw {
    constructor(){
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.getDrawResult = _result;
    }

    drawResult(){
        let colors = [];
        //uzupełnienie tablicy poprzez losowanie
        for(i = 0; i < this.options.length; i++){
            const colorIndex = Math.floor(Math.random() * this.options.length)
            const color = this.options[colorIndex];
            colors.push(color);
        }
        return colors
    }
}