let canvasC1A = document.getElementById('canvasC1A')
let canvasC1B = document.getElementById('canvasC1B')
let canvasC1C = document.getElementById('canvasC1C')
let canvasC1D = document.getElementById('canvasC1D')
let contextC1a = canvasC1A.getContext('2d')
let contextC1b = canvasC1B.getContext('2d')
let contextC1c = canvasC1C.getContext('2d')
let contextC1d = canvasC1D.getContext('2d')

window.onload = () => {
  c1a()
  c1b()
  c1c()
  c1d()
}

const c1a = () => {
  contextC1a.fillRect(0, 0, 150, 100)
  contextC1a.fillStyle = '#cc0000'
  contextC1a.fillRect(10, 10, 100, 70)
  contextC1a.fillStyle = 'blue'
  contextC1a.fillRect(77, 120, 100, 70)
}

const c1b = () => {
  contextC1b.fillStyle = 'blueViolet'
  contextC1b.fillRect(0, 0, 100, 100)
  contextC1b.fillStyle = 'rgba(255,255,0,0.75)'
  contextC1b.fillRect(50, 50, 100, 100)
}

const c1c = () => {
  for (let index = 0; index <= 10; index++) {
    contextC1c.fillStyle = 'skyblue'
    contextC1c.fillRect(index * 15, index * 15, 10, 10)
  }
  for (let index = 0; index <= 10; index++) {
    contextC1c.lineWidth = 4
    contextC1c.strokeStyle = 'blue'
    contextC1c.strokeRect(index * 15, 150 - index * 15, 10, 10)
  }
}
 
const c1d = () => {
  for (let index = 0; index <= 10; index++) {
    contextC1d.fillStyle = 'skyblue'
    contextC1d.fillRect(index * 15, index * 15, 10, 10)
  }
  for (let index = 0; index <= 10; index++) {
    contextC1d.lineWidth = 4
    contextC1d.strokeStyle = 'blue'
    contextC1d.strokeRect(index * 15, 150 - index * 15, 10, 10)
  }
  document.getElementById('clear').addEventListener('click', e => {
    contextC1d.clearRect(55, 55, 48, 48)
  })
}
