export default class Sequence {
    sequences = [];
    constructor() {
        this.sequences = [];
    }

    GenerateSequence() {
        const colors = [
            "rosa",
            "violeta",
            "amarillo",
            "turquesa",
            "blanco",
            "naranja",
        ];
        const sequence = [];
        for (let i = 0; i < 4; i++) {
            sequence.push(colors[Math.floor(Math.random() * colors.length)]);
        }
        return sequence;
    }
}
const CheckPositionAndColor = (sequenceUser, sequenceCorrect) => {
    if (sequence == board.sequence) {
        console.log("ganaste");
    }
};

const CheckColor = () => {};
