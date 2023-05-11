let count = 0
let counterElement = document.getElementById('contadorPause')
let videoEx4 = document.getElementById('videoEx4')
let videoEx5 = document.getElementById('videoEx5')
let pauseEx5 = document.getElementById('pauseEx5')
let playEx5 = document.getElementById('playEx5')

videoEx4.addEventListener('pause', e => {
  count++
  counterElement.innerHTML = count
})

pauseEx5.addEventListener('click', e => {
  videoEx5.pause()
})

playEx5.addEventListener('click', e => {
  videoEx5.play()
})
