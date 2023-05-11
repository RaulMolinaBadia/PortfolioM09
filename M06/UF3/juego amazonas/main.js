let columns = 10
let rows = 10
let white = '/img/blanca.png'
let black = '/img/negra.png'
let blackQueens = ['0-3', '0-6', '3-0', '3-9']
let whiteQueens = ['6-0', '6-9', '9-3', '9-6']
let turn = 'White'
let lastSquareSelected
let isMoved = false

window.onload = () => {
  ShowBoard()
  PositionStartPieces()
}

const PositionStartPieces = () => {
  blackQueens.forEach(piece => {
    let pieceBlack = document.getElementById(piece)
    pieceBlack.innerHTML = `<img src=${black} alt='negra' />`
    pieceBlack.classList.add('queenBlack')
    pieceBlack.classList.add('queen')

    if (turn == 'Black') {
      pieceBlack.classList.add('pieceTurnSelected')
    }
  })
  
  whiteQueens.forEach(piece => {
    let pieceWhite = document.getElementById(piece)
    pieceWhite.innerHTML = `<img src=${white} alt='blanca' />`
    pieceWhite.classList.add('queenWhite')
    pieceWhite.classList.add('queen')

    if (turn == 'White') {
      pieceWhite.classList.add('pieceTurnSelected')
    }
  })
}

const ChangeTurn = () => {
  if (turn == 'White') {
    turn = 'Black'
  } else {
    turn = 'White'
  }
  ChangeSelected()
  ClearBoard()
}

const SelectedQueen = square => {
  if (square.classList.contains(`queen${turn}`)) {
    lastSquareSelected = square
    square.classList.toggle('queenSelected')
    CheckPosibleMovements(square)
  } else if (square.classList.contains('posibleMovement')) {
    lastSquareSelected.classList.toggle(`queen${turn}`)
    lastSquareSelected.classList.toggle('pieceTurnSelected')
    lastSquareSelected.classList.toggle('queen')
    lastSquareSelected.innerHTML = ''
    lastSquareSelected = square
    MoveQueen(square)
  } else if (square.classList.contains('posibleShoot')) {
    console.log(square)
    square.classList.toggle('arrow')
    ClearBoard()
    isMoved = false
    ChangeTurn()
  } else {
    square.classList.remove('queenSelected')
  }
}

const CheckVerticalMovement = pieceSelected => {
  let pieceSelectedId = pieceSelected.getAttribute('id').split('-')
  let pieceSelectedRow = pieceSelectedId[0]
  let pieceSelectedColumn = pieceSelectedId[1]
  for (let index = pieceSelectedRow - 1; ; index--) {
    let piece = board.children[index]?.children[pieceSelectedColumn]
    if (piece != null) {
      if (
        piece.classList.contains(`queenBlack`) ||
        piece.classList.contains(`queenWhite`) ||
        piece.classList.contains(`arrow`)
      ) {
        break
      } else {
        if (isMoved) {
          piece.classList.toggle('posibleShoot')
        } else {
          piece.classList.toggle('posibleMovement')
        }
      }
    } else {
      break
    }
  }
  for (let index = Number(pieceSelectedRow) + 1; index < 10; index++) {
    let piece = board.children[index]?.children[pieceSelectedColumn]
    if (
      piece.classList.contains(`queenBlack`) ||
      piece.classList.contains(`queenWhite`) ||
      piece.classList.contains(`arrow`)
    ) {
      break
    } else {
      if (isMoved) {
        piece.classList.toggle('posibleShoot')
      } else {
        piece.classList.toggle('posibleMovement')
      }
    }
  }
}
const CheckHorizontalMovement = pieceSelected => {
  let pieceSelectedId = pieceSelected.getAttribute('id').split('-')
  let pieceSelectedRow = pieceSelectedId[0]
  let pieceSelectedColumn = pieceSelectedId[1]
  for (let index = pieceSelectedColumn - 1; index >= 0; index--) {
    let piece = board.children[pieceSelectedRow]?.children[index]
    if (
      piece.classList.contains(`queenBlack`) ||
      piece.classList.contains(`queenWhite`) ||
      piece.classList.contains(`arrow`)
    ) {
      break
    } else {
      if (isMoved) {
        piece.classList.toggle('posibleShoot')
      } else {
        piece.classList.toggle('posibleMovement')
      }
    }
  }
  for (let index = Number(pieceSelectedColumn) + 1; index < 10; index++) {
    let piece = board.children[pieceSelectedRow]?.children[index]
    if (
      piece.classList.contains(`queenBlack`) ||
      piece.classList.contains(`queenWhite`) ||
      piece.classList.contains(`arrow`)
    ) {
      break
    } else {
      if (isMoved) {
        piece.classList.toggle('posibleShoot')
      } else {
        piece.classList.toggle('posibleMovement')
      }
    }
  }
}

const CheckDiagonalMovement = pieceSelected => {
  let pieceSelectedId = pieceSelected.getAttribute('id').split('-');
  let pieceSelectedRow = pieceSelectedId[0];
  let pieceSelectedColumn = pieceSelectedId[1];
  let row = pieceSelectedRow;
  let column = pieceSelectedColumn;
  
  for (let i = -1; i <= 1; i += 2) {
    for (let j = -1; j <= 1; j += 2) {
      row = Number(pieceSelectedRow) + i;
      column = Number(pieceSelectedColumn) + j;
      while (row >= 0 && row < 10 && column >= 0 && column < 10) {
        let piece = board.children[row].children[column];
        if (
          piece.classList.contains(`queenBlack`) ||
          piece.classList.contains(`queenWhite`) ||
          piece.classList.contains(`arrow`)
        ) {
          break;
        } else {
          if (isMoved) {
            piece.classList.toggle("posibleShoot");
          } else {
            piece.classList.toggle("posibleMovement");
          }
        }
        row += i;
        column += j;
      }
    }
  }
};

const CheckPosibleMovements = pieceSelected => {
  ClearBoard()
  CheckVerticalMovement(pieceSelected)
  CheckHorizontalMovement(pieceSelected)
  CheckDiagonalMovement(pieceSelected)
}
const ChangeSelected = () => {
  let pieces = document.querySelectorAll('.piece')
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].classList.remove('pieceTurnSelected')
    if (pieces[i].classList.contains(`queen${turn}`)) {
      pieces[i].classList.add('pieceTurnSelected')
    }
  }
}

const MoveQueen = destinationSquare => {
  if (turn == 'White') {
    destinationSquare.innerHTML = `<img src='/img/blanca.png' alt='blanca' />`
    destinationSquare.classList.add('queenWhite')
    destinationSquare.classList.toggle('pieceTurnSelected')
    destinationSquare.classList.toggle('queen')
    isMoved = true
  } else if (turn == 'Black') {
    destinationSquare.innerHTML = `<img src='/img/negra.png' alt='negra' />`
    destinationSquare.classList.add('queenBlack')
    destinationSquare.classList.toggle('pieceTurnSelected')
    destinationSquare.classList.toggle('queen')
    isMoved = true
  }
  CheckPosibleMovements(destinationSquare)
  console.log(destinationSquare)
}

const ShowBoard = () => {
  board.innerHTML = ''
  for (let r = 0; r < rows; r++) {
    let row = document.createElement('div')
    row.classList.add('row')
    row.setAttribute('id', 'row' + r)
    board.append(row)
    for (let c = 0; c < columns; c++) {
      let newDiv = document.createElement('div')
      newDiv.setAttribute('id', r + '-' + c)
      newDiv.classList.add('piece')
      if ((r + c) % 2 == 0) {
        newDiv.classList.add('white')
      } else {
        newDiv.classList.add('black')
      }
      newDiv.addEventListener('click', e => {
        SelectedQueen(e.currentTarget)
      })
      board.children[r].append(newDiv)
    }
  }
  PositionStartPieces()
}

const ClearBoard = () => {
  let pieces = document.querySelectorAll('.piece')
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].classList.contains('queenSelected')) {
      pieces[i].classList.toggle('queenSelected')
    }
    if (pieces[i].classList.contains('posibleMovement')) {
      pieces[i].classList.toggle('posibleMovement')
    }
    if (pieces[i].classList.contains('posibleShoot')) {
      pieces[i].classList.toggle('posibleShoot')
    }
  }
}
