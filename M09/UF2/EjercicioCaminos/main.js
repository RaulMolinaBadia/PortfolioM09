let canvasC7A = document.getElementById('canvasC7A')
let canvasC7B = document.getElementById('canvasC7B')
let canvasC9B = document.getElementById('canvasC9B')
let canvasC9F = document.getElementById('canvasC9F')

let contextC7b = canvasC7B.getContext('2d')
let contextC7a = canvasC7A.getContext('2d')
let contextC9b = canvasC9B.getContext('2d')
let contextC9f = canvasC9F.getContext('2d')

window.onload = () => {
  c7a()
  c7b()
  c9b()
  c9f()
}
function createGrids (ctx, canvas) {
  const canvasWidth = canvas.width
  const canvasHeight = canvas.height
  const size = 10

  // Dibujar regla en el eje X y Y
  ctx.beginPath()
  ctx.moveTo(0, canvasHeight / 2)
  ctx.lineTo(canvasWidth, canvasHeight / 2)
  ctx.moveTo(canvasWidth / 2, 0)
  ctx.lineTo(canvasWidth / 2, canvasHeight)
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 1
  ctx.stroke()

  // Dibujar líneas horizontales y verticales
  ctx.beginPath()
  ctx.strokeStyle = 'gray'
  ctx.lineWidth = 0.5
  for (let y = 0; y <= canvasHeight; y += size) {
    ctx.moveTo(0, y)
    ctx.lineTo(canvasWidth, y)
  }
  for (let x = 0; x <= canvasWidth; x += size) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
  }
  ctx.stroke()
  ctx.closePath()

}
const c7a = () => {
  let x = 0
  let y = 200
  contextC7a.beginPath()
  contextC7a.lineWidth = 2
  contextC7a.moveTo(x, y)
  let medidas = 200 / 20
  for (let index = 0; index < 20; index++) {
    x += medidas
    contextC7a.lineTo(x, y)
    y += medidas
    contextC7a.lineTo(x, y)
  }
  contextC7a.lineTo(0, 400)
  contextC7a.closePath()
  contextC7a.stroke()
}

const c7b = () => {
  let numLines = 40
  let width = 400
  let height = 400
  let newWidth = width / numLines
  let newHeight = height / numLines
  for (let index = 0; index < numLines; index++) {
    contextC7b.beginPath()
    contextC7b.moveTo(index * newWidth, height)
    contextC7b.lineTo(width, height - index * newHeight)
    contextC7b.closePath()
    contextC7b.stroke()
  }
}
const c9b = () => {
  const numLines = 40
  for (let index = 0; index <= numLines; index++) {
    contextC9b.beginPath()
    contextC9b.moveTo(0, 200)
    contextC9b.lineTo(200, (400 / numLines) * index)
    contextC9b.stroke()
    contextC9b.closePath()
  }
  for (let index = 0; index <= numLines; index++) {
    contextC9b.beginPath()
    contextC9b.moveTo(400, 200)
    contextC9b.lineTo(200, (400 / numLines) * index)
    contextC9b.stroke()
    contextC9b.closePath()
  }
}
const c9f = (x, y) => {
  contextC9f.clearRect(0, 0, 400, 400)

  const SIDE_LINES = 50
  for (let index = 0; index <= SIDE_LINES; index++) {
    contextC9f.beginPath()
    contextC9f.moveTo(x, y)
    contextC9f.lineTo((400 / SIDE_LINES) * index, 0)
    contextC9f.closePath()
    contextC9f.stroke()
  }
  for (let index = 0; index <= SIDE_LINES; index++) {
    contextC9f.beginPath()
    contextC9f.moveTo(x, y)
    contextC9f.lineTo(400, (400 / SIDE_LINES) * index)
    contextC9f.closePath()
    contextC9f.stroke()
  }
  for (let index = 0; index <= SIDE_LINES; index++) {
    contextC9f.beginPath()
    contextC9f.moveTo(x, y)
    contextC9f.lineTo((400 / SIDE_LINES) * index, 400)
    contextC9f.closePath()
    contextC9f.stroke()
  }
  for (let index = 0; index <= SIDE_LINES; index++) {
    contextC9f.beginPath()
    contextC9f.moveTo(x, y)
    contextC9f.lineTo(0, (400 / SIDE_LINES) * index)
    contextC9f.closePath()
    contextC9f.stroke()
  }
}

canvasC9F.addEventListener('mousemove', e => {
  e.offsetX
  e.offsetY
  c9f(e.offsetX, e.offsetY)
})


