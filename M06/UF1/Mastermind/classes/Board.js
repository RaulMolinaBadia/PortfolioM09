export default class Board {
  constructor () {
    this.sequence = this.GenerateSequence()
    console.log(this.sequence)
    this.attempts = []
  }

  GenerateSequence () {
    const colors = [
      'rosa',
      'violeta',
      'amarillo',
      'turquesa',
      'blanco',
      'naranja'
    ]
    const sequence = []
    for (let i = 0; i < 4; i++) {
      sequence.push(colors[Math.floor(Math.random() * colors.length)])
    }
    return sequence
  }
}
