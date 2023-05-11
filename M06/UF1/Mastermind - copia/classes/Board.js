import Sequence from "./Sequence";

export default class Board {
    correctAnswer;
    constructor() {
        this.correctAnswer = new Sequence();
        this.correctAnswer.GenerateSequence();
        console.log(this.correctAnswer);
    }
}
