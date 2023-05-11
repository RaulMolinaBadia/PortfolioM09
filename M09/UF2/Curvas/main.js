let canvasC13B = document.getElementById('canvasC13B')
let canvasC13C = document.getElementById('canvasC13C')
let canvasC14 = document.getElementById('canvasC14')
let canvasC16A = document.getElementById('canvasC16A')

let contextC13B = canvasC13B.getContext('2d')
let contextC13C = canvasC13C.getContext('2d')
let contextC14 = canvasC14.getContext('2d')
let contextC16A = canvasC16A.getContext('2d')

window.onload = () => {
  c13b()
  c13c()
  c14()
  c16a()
}
const createGrids = (ctx, canvas) => {
  const canvasWidth = canvas.width
  const canvasHeight = canvas.height

  ctx.beginPath()
  ctx.moveTo(0, canvasHeight / 2) // Inicio de la regla en el eje X
  ctx.lineTo(canvasWidth, canvasHeight / 2) // Fin de la regla en el eje X
  ctx.strokeStyle = 'black' // Color de trazo
  ctx.lineWidth = 1 // Ancho de trazo
  ctx.stroke()

  // Dibujar regla en el eje Y
  ctx.beginPath()
  ctx.moveTo(canvasWidth / 2, 0) // Inicio de la regla en el eje Y
  ctx.lineTo(canvasWidth / 2, canvasHeight) // Fin de la regla en el eje Y
  ctx.stroke()

  // Dibujar líneas horizontales
  ctx.beginPath()
  ctx.strokeStyle = 'gray' // Color de trazo para las líneas
  ctx.lineWidth = 0.5 // Ancho de trazo para las líneas
  let size = 10
  for (let y = canvasHeight / 2 - size; y >= 0; y -= size) {
    ctx.moveTo(0, y)
    ctx.lineTo(canvasWidth, y)
  }
  for (let y = canvasHeight / 2 + size; y <= canvasHeight; y += size) {
    ctx.moveTo(0, y)
    ctx.lineTo(canvasWidth, y)
  }
  ctx.stroke()

  // Dibujar líneas verticales
  ctx.beginPath()
  for (let x = canvasWidth / 2 - size; x >= 0; x -= size) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
  }
  for (let x = canvasWidth / 2 + size; x <= canvasWidth; x += size) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
  }
  ctx.stroke()
  ctx.closePath()

}

const radiants = grados => {
  return (grados * Math.PI) / 180
}

const c13b = () => {
  createGrids(contextC13B, canvasC13B)
  const x = 100
  const y = 200

  contextC13B.beginPath()
  contextC13B.moveTo(x, y)
  contextC13B.quadraticCurveTo(100, 100, 200, 100)
  contextC13B.lineTo(300, 100)
  contextC13B.lineTo(300, 200)
  contextC13B.quadraticCurveTo(300, 300, 200, 300)
  contextC13B.lineTo(100, 300)
  contextC13B.closePath()
  contextC13B.lineWidth = 2
  contextC13B.fill()
}

const c13c = () => {
  createGrids(contextC13C, canvasC13C)

  contextC13C.beginPath()
  contextC13C.arc(200, 200, 150, radiants(180), radiants(90))
  contextC13C.arc(200, 200, 100, radiants(90), radiants(180))
  contextC13C.closePath()
  contextC13C.fill()
  contextC13C.beginPath()
  contextC13C.arc(200, 200, 35, radiants(0), radiants(360))
  contextC13C.fillStyle = 'red'
  contextC13C.fill()
  contextC13C.closePath()
}

const c14 = () => {
  contextC14.beginPath()
  contextC14.lineWidth = 1
  contextC14.moveTo(50, 50)
  contextC14.quadraticCurveTo(50, 30, 70, 30)
  contextC14.lineTo(150, 30)
  contextC14.quadraticCurveTo(170, 30, 170, 50)
  contextC14.lineTo(170, 150)
  contextC14.quadraticCurveTo(170, 170, 150, 170)
  contextC14.lineTo(70, 170)
  contextC14.quadraticCurveTo(50, 170, 50, 150)
  contextC14.closePath()
  contextC14.stroke()
  createGrids(contextC14, canvasC14)
}

const c16a = () => {
  createGrids(contextC16A, canvasC16A)
  contextC16A.beginPath()
  contextC16A.moveTo(0, 200)
  contextC16A.lineTo(0, 50)
  contextC16A.quadraticCurveTo(100, 0, 150, 70)
  contextC16A.quadraticCurveTo(180, 50, 200, 65)
  contextC16A.quadraticCurveTo(290, 50, 300, 80)
  contextC16A.quadraticCurveTo(400, 0, 400, 100)
  contextC16A.lineTo(400, 200)
  contextC16A.fillStyle = 'lightblue'
  contextC16A.closePath()
  contextC16A.fill()
}
