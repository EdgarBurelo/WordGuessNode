let Letter = function(letra) {
    this.letter = letra;
    this.guessed = false;
    
};

Letter.prototype.letterGuessed = function() {
    if(!this.guessed) {
        return "_";
    } else {
        return this.letter;
    }
};

Letter.prototype.letterEval = function(letter) {
    if(letter == this.letter) {
        this.guessed = true;
    }
};

module.exports = Letter;

// let letra1 = new Letter("A");
// letra1.letterEval("A");
// console.log(letra1.guessed);