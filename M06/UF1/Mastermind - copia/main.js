import Result from './classes/Result.js'
import Board from './classes/Board.js'
import Sequence from './classes/Sequence.js'
let rosa = document.getElementById('rosa')
let amarillo = document.getElementById('amarillo')
let turquesa = document.getElementById('turquesa')
let violeta = document.getElementById('violeta')
let naranja = document.getElementById('naranja')
let blanco = document.getElementById('blanco')
let buttonCheck = document.getElementById('checkButton')
let colors = document.querySelectorAll('.color')
let sequence = document.querySelectorAll('.sequence')
let turno = 1
let board = new Board()

let colorSelected

colors.forEach(color => {
  color.addEventListener('click', e => {
    switch (e.target.id) {
      case 'rosa':
      case 'amarillo':
      case 'turquesa':
      case 'violeta':
      case 'naranja':
      case 'blanco':
        colorSelected = e.target.id
        console.log(colorSelected)
        return colorSelected
    }
  })
})

sequence.forEach(sequencePart => {
  sequencePart.addEventListener('click', e => {
    switch (e.target.id) {
      case 'sequence1':
      case 'sequence2':
      case 'sequence3':
      case 'sequence4':
        let selected = document.querySelector(
          `#sequences${turno} #${e.target.id}`
        )
        // console.log(selected);
        selected.className = ''
        selected.classList.add('sequence')
        selected.classList.add(`${colorSelected}`)
    }
  })
})
buttonCheck.addEventListener('click', e => {
  let sequence1 = document.querySelector(`#sequences${turno} #sequence1`)
  let sequence2 = document.querySelector(`#sequences${turno} #sequence2`)
  let sequence3 = document.querySelector(`#sequences${turno} #sequence3`)
  let sequence4 = document.querySelector(`#sequences${turno} #sequence4`)
  let sequence = new Sequence(
    sequence1.classList[1],
    sequence2.classList[1],
    sequence3.classList[1],
    sequence4.classList[1]
  )
  sequence.checkSequence(board.sequence)

  turno++
})
