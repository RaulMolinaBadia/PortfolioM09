export default class Sequence {
  sequences = []
  color1
  color2
  color3
  color4
  constructor (color1, color2, color3, color4) {
    this.color1 = color1
    this.color2 = color2
    this.color3 = color3
    this.color4 = color4
    this.sequences.unshift(this.color1, this.color2, this.color3, this.color4)
  }

  checkSequence (sequence) {

  }
}
const CheckPositionAndColor = (sequenceUser,sequenceCorrect) => {
  if (sequence == board.sequence) {
    console.log('ganaste')
  }
}

const CheckColor = () => {}
