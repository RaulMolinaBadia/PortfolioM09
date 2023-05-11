let dniNumber = document.getElementById('dniNumeros')
let dniLetter = document.getElementById('dniLetra')
let nombre = document.getElementById('nombre')
let apellidos = document.getElementById('apellidos')
let email = document.getElementById('email')
let avenida = document.getElementById('avenida')
let poblacion = document.getElementById('poblacion')
let provincias = document.getElementById('provincias')
let archivo = document.getElementById('archivo')
let encriptado = document.getElementById('encriptado')
let comprimido = document.getElementById('comprimido')
let descripcion = document.getElementById('descripcion')
let enviar = document.getElementById('enviar')

dniNumber.addEventListener('input', checkDNI)
dniLetter.addEventListener('input', checkDNI)
nombre.addEventListener('input', checkWords)
apellidos.addEventListener('input', checkWords)
email.addEventListener('input', checkEmail)
poblacion.addEventListener('input', checkProvincias)
avenida.addEventListener('input', checkProvincias)
provincias.addEventListener('input', checkProvincia)
archivo.addEventListener('input', checkArchivo)
encriptado.addEventListener('input', checkFileChecked)
comprimido.addEventListener('input', checkFileChecked)
descripcion.addEventListener('input', checkDescripcion)
enviar.addEventListener('click', checkForm)

function checkEmail (e) {
  isEmpty(e.currentTarget.value)
    ? isNotOk(e.currentTarget)
    : isOk(e.currentTarget)
}

function checkWords (e) {
  isEmpty(e.currentTarget.value)
    ? isNotOk(e.currentTarget)
    : ContainsNumber(e.currentTarget.value)
    ? isNotOk(e.currentTarget, 'No puede contener numeros')
    : isOk(e.currentTarget)
  e.currentTarget.value = e.currentTarget.value.toUpperCase()
}

function checkDNI (e) {
  if (checkDNINumbers(e)) {
    isOk(dniLetter)
    isOk(dniNumber)
  } else {
    isNotOk(dniNumber)
    isNotOk(dniLetter)
  }
}

function checkDNINumbers (e) {
  if (!isEmpty(dniNumber.value) && !isEmpty(dniLetter.value)) {
    if (
      dniNumber.value.length == 8 &&
      checkDniLetter(dniNumber.value, dniLetter.value)
    ) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function checkProvincias () {
  isEmpty(avenida.value) ? isNotOk(avenida) : isOk(avenida)
  isEmpty(poblacion.value) ? isNotOk(poblacion) : isOk(poblacion)
  !isEmpty(avenida.value) && !isEmpty(poblacion.value)
    ? (provincias.disabled = false)
    : (provincias.disabled = true)
}

function checkProvincia () {
  provincias.value == ''
    ? isNotOk(provincias, 'Debes seleccionar alguna provincia')
    : isOk(provincias)
}

function checkArchivo () {
  if (archivo.files.length > 0) {
    isOk(archivo)
    encriptado.disabled = false
    comprimido.disabled = false
  } else {
    isNotOk(archivo)
    encriptado.disabled = true
    comprimido.disabled = true
  }
}

function checkFileChecked () {
  if (encriptado.checked || comprimido.checked) {
    descripcion.disabled = false
  } else {
    descripcion.disabled = true
  }
}

function checkDescripcion () {
  isEmpty(descripcion.value)
    ? isNotOk(descripcion)
    : descripcion.value.length > 30
    ? isNotOk(descripcion, 'La descripción no puede tener más de 30 caracteres')
    : isOk(descripcion)
}

function limita (maximoCaracteres) {
  var elemento = document.getElementById('texto')
  if (elemento.value.length >= maximoCaracteres) {
    return false
  } else {
    return true
  }
}

function checkForm (e) {
  let errores = document.body.querySelectorAll('.Error')
  let info = document.getElementById('info')
  if (errores.length != 0) {
    info.innerHTML = ''
    info.innerHTML = '<h2>Errores</h2>'
    for (let index = 0; index <= errores.length; index++) {
      info.innerHTML += '<p>Error: ' + errores[index].id + '. <br></p>'
    }
    e.preventDefault()
  } else {
    info.innerHTML = ''
  }
}

function isOk (e) {
  e.classList.remove('Error')
  e.classList.add('ok')
}

function isNotOk (e) {
  e.classList.remove('ok')
  e.classList.add('Error')
}

function isEmpty (value) {
  value.toString().replaceAll(' ', '')
  return value == ''
}

function checkDniLetter (number, letter) {
  let letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ]
  return letters[number % 23] == letter.toUpperCase()
}

function ContainsNumber (value) {
  let number = new RegExp('[0-9]+')
  return number.test(value)
}
