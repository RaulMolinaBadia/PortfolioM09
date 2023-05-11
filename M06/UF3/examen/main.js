let lastInputValuetsi = ''
let matricula = document.getElementById('licensePlate')
let resultatEx1 = document.getElementById('resultatEx1')
let resultatEx2 = document.getElementById('resultatEx2')
let colorSequence = []
window.onload = () => {
  let ex1Nom = document.getElementById('pname')
  let ex1Cognom = document.getElementById('plastname')
  let ex2Nom = document.getElementById('sname')
  let ex2Cognom = document.getElementById('slastname')
  let ex2tsi = document.getElementById('tsi')
  let lastInputValueNom = ''
  let lastInputValueCognom = ''
  let lastInputValueNom2 = ''
  let lastInputValueCognom2 = ''
  //EX1
  ex1Nom.addEventListener('input', e => {
    console.log('a')
    if (checkNumbers(e.target.value) && checkSimbols(e.target.value)) {
      lastInputValueNom = e.target.value
      ex1Nom.value = lastInputValueNom
    } else {
      ex1Nom.value = lastInputValueNom
    }
  })

  ex1Cognom.addEventListener('input', e => {
    if (checkNumbers(e.target.value) && checkSimbols(e.target.value)) {
      lastInputValueCognom = e.target.value
      ex1Cognom.value = lastInputValueCognom
    } else {
      ex1Cognom.value = lastInputValueCognom
    }
  })
  //EX2
  ex2Nom.addEventListener('input', e => {
    if (checkNumbers(e.target.value) && checkSimbols(e.target.value)) {
      lastInputValueNom2 = e.target.value
      ex2Nom.value = lastInputValueNom2
    } else {
      ex2Nom.value = lastInputValueNom2
    }
  })
  ex2Cognom.addEventListener('input', e => {
    if (checkNumbers(e.target.value) && checkSimbols(e.target.value)) {
      lastInputValueCognom2 = e.target.value
      ex2Cognom.value = lastInputValueCognom2
    } else {
      ex2Cognom.value = lastInputValueCognom2
    }
  })

  ex2tsi.addEventListener('input', e => {
    checkSanitari(e)
  })
}

function ColocarID () {
  let board = document.querySelectorAll('.board tbody tr')
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].children.length; c++) {
      board[r].children[c].setAttribute('id', r + ' ' + c)
      if (board[r].children[c].classList.contains('blue')) {
        board[r].children[c].innerHTML = '?'
      }
    }
  }
}
function CalcularEx4 () {
  ColocarID()
  let board = document.querySelectorAll('.board tbody tr')
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].children.length; c++) {
      if (board[r].children[c].classList.contains('blue')) {
        CalcularAlrededorCasilla(board[r].children[c])
      }
    }
  }
}

function CalcularAlrededorCasilla (element) {
  let elementID = element.id.split(' ')
  let row = elementID[0]
  let column = elementID[1]
  let totalNumber = 0
  column = Number(column)
  row = Number(row)
  // console.log(document.getElementById((row - 1) + ' ' + (column - 1)))
  // console.log(document.getElementById((row + 1) + ' ' + column))
  // console.log(document.getElementById((row - 1) + ' ' + (column + 1)))
  // console.log(document.getElementById(row + ' ' + (column - 1)))
  // console.log(document.getElementById(row + ' ' + (column + 1)))
  // console.log(document.getElementById((row + 1) + ' ' + (column - 1)))
  // console.log(document.getElementById(row + ' ' + (column - 1)))
  // console.log(document.getElementById((row + 1) + ' ' + (column + 1)))

  //arriba izquierda
  if (document.getElementById((row - 1) + ' ' + (column - 1)) != undefined) {
    if (
      document.getElementById((row + 1) + ' ' + (column - 1)).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById((row - 1) + ' ' + (column - 1)).innerHTML)
    }
  }

  //arriba arriba
  if (document.getElementById((row - 1) + ' ' + column) != undefined) {
    if (
      document.getElementById((row - 1) + ' ' + column).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById((row - 1) + ' ' + column).innerHTML)
    }
  }

  // arriba derecha
  if (document.getElementById((row - 1) + ' ' + (column + 1)) != undefined) {
    if (
      document.getElementById((row - 1) + ' ' + (column + 1)).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById((row - 1) + ' ' + (column + 1)).innerHTML)
    }
  }

  //izquierda
  if (document.getElementById(row + ' ' + (column - 1)) != undefined) {
    if (
      document.getElementById(row + ' ' + (column - 1)).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById(row + ' ' + (column - 1)).innerHTML)
    }
  }

  // derecha
  if (document.getElementById(row + ' ' + (column + 1)) != undefined) {
    if (
      document.getElementById(row + ' ' + (column + 1)).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById(row + ' ' + (column + 1)).innerHTML)
    }
  }

  // abajo izquierda
  if (document.getElementById((row + 1) + ' ' + (column - 1)) != undefined) {
    if (
      document.getElementById((row + 1) + ' ' + (column - 1)).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById((row + 1) + ' ' + (column - 1)).innerHTML)
    }
  }

  // abajo abajo
  if (document.getElementById((row +1) + ' ' + column) != undefined) {
    if (document.getElementById((row +1) + ' ' + column).innerHTML != '?') {
      totalNumber =
        totalNumber +
        Number(document.getElementById((row +1) + ' ' + column ).innerHTML)
    }
  }

  // abajo derecha
  if (document.getElementById((row + 1) + ' ' + (column + 1)) != undefined) {
    if (
      document.getElementById((row + 1) + ' ' + (column + 1)).innerHTML != '?'
    ) {
      totalNumber =
        totalNumber +
        Number(document.getElementById((row + 1) + ' ' + (column + 1)).innerHTML)
    }
  }
  element.innerHTML = totalNumber
  console.log(totalNumber)
}
function checkSimbols (element) {
  if (
    element.includes('!') ||
    element.includes('"') ||
    element.includes('·') ||
    element.includes('$') ||
    element.includes('%') ||
    element.includes('&') ||
    element.includes('/') ||
    element.includes('(') ||
    element.includes(')') ||
    element.includes('=') ||
    element.includes('?') ||
    element.includes('¿') ||
    element.includes('*') ||
    element.includes('_') ||
    element.includes('-')
  ) {
    return false
  } else {
    return true
  }
}
function checkNumbers (element) {
  if (
    element.includes('1') ||
    element.includes('2') ||
    element.includes('3') ||
    element.includes('4') ||
    element.includes('5') ||
    element.includes('6') ||
    element.includes('7') ||
    element.includes('8') ||
    element.includes('9') ||
    element.includes('0')
  ) {
    return false
  } else {
    return true
  }
}

function checkParking () {
  if (!isNaN(licensePlate.value.substring(0, 4))) {
    resultatEx1.innerHTML = ''
    let a = licensePlate.value.substring(4, 7)
    if (checkSimbols(a) && checkNumbers(a) && a.length >= 3) {
        licensePlate.classList.remove('error')
      resultatEx1.innerHTML = 'reserva confirmada'
    } else {
        licensePlate.classList.add('error')
    }
  } else {
    licensePlate.classList.add('error')

  }
}

//EX2
function checkSanitari (e) {
  let numCharacter = 10 - lastInputValuetsi.length
  if (e.target.value.length >= 4) {
    let caracteres4 = e.target.value.substring(0, 4)
    let caracteresApellido = ex2Cognom.value.split(' ')
    console.log(caracteresApellido)
    let tsi =
      caracteresApellido[0].substring(0, 2) +
      caracteresApellido[1].substring(0, 2)
    console.log(caracteres4)
    if (checkMayus(tsi, caracteres4)) {
      resultatEx2.innerHTML = 'ok'
    } else {
      resultatEx2.innerHTML = 'validacion 2 erronea '
    }
  }
  if (checkMaxLength(e)) {
    resultatEx2.innerHTML = resultatEx2.innerHTML + `faltan ${numCharacter} `
  } else {
    resultatEx2.innerHTML = 'validacion 4 erronea '
  }
}
function checkMayus (tsi, valores4) {
  if (valores4.toUpperCase == valores4) {
    if (tsi.toUpperCase == valores4) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkMaxLength (e) {
  if (lastInputValuetsi.length <= 10) {
    lastInputValuetsi = e.target.value
    ex2tsi.value = lastInputValuetsi
    return true
  } else {
    ex2tsi.value = lastInputValuetsi
    return false
  }
}

function clicEx3 (e) {
colorSequence.push(e.classList[0])
console.log(colorSequence);
}

function reproduirEx3 () {
    colorSequence.forEach((color) => {
        setTimeout(() => {
            document.querySelector(`.${color}`).classList.add('seleccionat')
        }, 1000);
    })
}