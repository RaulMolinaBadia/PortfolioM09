const board = document.getElementById('board')
let turn = 'blue'
const checkVictory = () => {
  let count = 0
  count = checkWinner()
  console.log(count)
  return count
}
const controllGameStatus = () => {
  let numBlueCells = checkVictory()
  if (numBlueCells >= 4) {
    alert(`has ganado hay ${numBlueCells} celas azules`)
  }
}
const checkWinner = () => {
  let count = 0
  for (let row = 0; row < board.children.length; row++) {
    for (
      let column = 0;
      column < board.children[row].children.length;
      column++
    ) {
      if (board.children[row].children[column].classList.contains(`${turn}`)) {
        board.children[row].children[column].classList.add('checkedOK')
        count++
      } else {
        board.children[row].children[column].classList.add('checkedFail')
      }
    }
  }
  return count
}

const setTockensOnBoard = () => {
  for (
    let elementRow = 0;
    elementRow < board.children.length + 1;
    elementRow++
  ) {
    if (elementRow <= 3) {
      // vertical
      // board.children[elementRow].children[0].classList.add('blue')
      // horizontal
      // board.children[0].children[elementRow].classList.add('blue')
      // diagonal
      board.children[elementRow].children[4].classList.add('blue')


    }
  }
}

const createBoard = () => {
  for (let r = 0; r < 6; r++) {
    const row = document.createElement('div')
    row.classList.add('row')
    board.append(row)
    for (let c = 0; c < 7; c++) {
      const column = document.createElement('div')
      column.classList.add('cell')
      row.append(column)
    }
  }
}
document.getElementById('checkGameStatus').addEventListener('click', e => {
  controllGameStatus()
})
createBoard()
setTockensOnBoard()
