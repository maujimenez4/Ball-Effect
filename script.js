const canvas =  document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight


let bolas = []

for (let i = 0; i < 30; i++) {
    bolas.push(new Bola (canvas.width / 2, canvas.height / 2))
    
}

function animar(){

    ctx.clearRect(0,0, canvas.width, canvas.height)

    bolas.forEach(bola=>{

        bolas.forEach(bola2 => {
            ctx.beginPath()
            ctx.moveTo(bola.x, bola.y)
            ctx. lineTo(bola2.x, bola2.y)
            ctx.stroke()
            ctx.closePath()
        })

        bola.dibujar()
        bola.mover()
    })
    requestAnimationFrame(animar)
}

animar()
