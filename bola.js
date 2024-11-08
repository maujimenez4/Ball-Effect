class Bola{

    constructor(x,y){
        this.x = x
        this.y = y
        this.radio = 10
        this.dirY = (Math.random() * 2) - 1 
        this.dirX = (Math.random() * 2) - 1
        this.velocidad = 200
        

    }

    dibujar(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }

    mover(){
        this.x += this.dirX * this.velocidad
        this.y += this.dirY * this.velocidad


    }

}
