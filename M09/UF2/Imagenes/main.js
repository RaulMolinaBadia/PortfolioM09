let canvasSpriteLuchador = document.getElementById('canvasSpriteLuchador')
let canvasSpriteTanque = document.getElementById('canvasSpriteTanque')

let context1 = canvasSpriteLuchador.getContext('2d')
let context2 = canvasSpriteTanque.getContext('2d')

// window.onload = () => {
// }

const spriteLuchador = () => {
  let index = 0
  setInterval(() => {
    if (index == 7) {
      index = 0
    }
    let img = new Image()
    img.src = `img/luchador/Frame${index}.png`
    img.onload = () => {
      context1.clearRect(0, 0, 400, 400)
      context1.drawImage(img, 0, 0)
    }
    index++
  }, 50)
}

const spriteTanque = () => {
  let img2 = new Image()
  let imgX = 13
  let imgY = 460
  let index = 0
  img2.src = `./img/MetalSlug.png`
  img2.onload = () => {
    setInterval(() => {
      if (imgX > 400) {
        index = 0
        imgX = 13
        imgY = 460
      }
      imgX += 75
      context2.clearRect(0, 0, 400, 400)
      context2.drawImage(img2, imgX, imgY, 55, 72, 0, 0, 220, 220)
      index++
    }, 50)
  }
}

spriteLuchador()
spriteTanque()
