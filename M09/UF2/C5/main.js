let canvasC5A = document.getElementById('canvasC5A')
let canvasC5B = document.getElementById('canvasC5B')
let canvasC5C = document.getElementById('canvasC5C')
let canvasC5D = document.getElementById('canvasC5D')
let canvasC5E = document.getElementById('canvasC5E')
let contextC5a = canvasC5A.getContext('2d')
let contextC5b = canvasC5B.getContext('2d')
let contextC5c = canvasC5C.getContext('2d')
let contextC5d = canvasC5D.getContext('2d')
let contextC5e = canvasC5E.getContext('2d')

let canvasc5Width = canvasC5A.clientWidth

window.onload = () => {
  c5a()
  c5b()
  c5c()
  c5d()
  c5e()
}
const randomNumberColorGenerator = () => {
  return Math.floor(Math.random() * 255)
}

const randomGreyScaleGenerator = () => {
  let randomGreyScale = Math.floor(Math.random() * 255)
  return `rgb(${randomGreyScale},${randomGreyScale},${randomGreyScale})`
}
const c5a = () => {
  for (let row = 0; row < canvasc5Width; row++) {
    for (let column = 0; column < canvasc5Width; column++) {
      contextC5a.fillStyle = `rgb(${randomNumberColorGenerator()},${randomNumberColorGenerator()},${randomNumberColorGenerator()})`
      contextC5a.fillRect(row * 20, column * 20, 20, 20)
    }
  }
}

const c5b = () => {
  for (let row = 0; row < canvasc5Width; row++) {
    for (let column = 0; column < canvasc5Width; column++) {
      contextC5b.fillStyle = randomGreyScaleGenerator()
      contextC5b.fillRect(row * 20, column * 20, 20, 20)
    }
  }
}

const c5c = () => {
  for (let row = 0; row < canvasc5Width; row++) {
    contextC5c.fillStyle = `rgb(${randomNumberColorGenerator()},${randomNumberColorGenerator()},${randomNumberColorGenerator()})`
    contextC5c.fillRect(row * 20, 0, 20, 400)
  }
}

const c5d = () => {
  for (let row = 0; row < canvasc5Width; row++) {
    contextC5d.fillStyle = randomGreyScaleGenerator()
    contextC5d.fillRect(row * 20, 0, 20, 400)
  }
}

const c5e = () => {
  for (let row = 0; row < canvasc5Width; row++) {
    for (let column = 0; column < canvasc5Width; column++) {
      contextC5e.strokeStyle = `rgb(${randomNumberColorGenerator()},${randomNumberColorGenerator()},${randomNumberColorGenerator()})`
      contextC5e.lineWidth = 4
      contextC5e.strokeRect(row * 20 + 5, column * 20 + 5, 9, 9)
    }
  }
}
