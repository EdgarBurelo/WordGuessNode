let Letter = require("./Letter");

// var letra1 = new Letter("A");
// letra1.letterEval("A");
// console.log(letra1.guessed);

let word = function(word){
    this.tWord = word;
    this.letterArray =[];
    this.wordGuessed = false;

};

word.prototype.LetterArrayFill = function() {
    for(let i = 0; i<this.tWord.length;i++){
        this.letterArray.push(new Letter(this.tWord[i]));
    }
};

word.prototype.stringRep = function() {
    let stringRepres = "";
    (this.letterArray).forEach(element => {
        stringRepres = stringRepres + element.letterGuessed()+" ";
    });
    console.log(stringRepres);
    return stringRepres;
    
};

word.prototype.stringEval = function(stringEv) {
    (this.letterArray).forEach(element => {
        element.letterEval(stringEv);
    });
    
};

word.prototype.wordGuessedEval = function() {
    let statuseval = false;
    (this.letterArray).forEach(element => {
        if (!element.guessed){
            statuseval = true;
        }
    });
    if(!statuseval) {
        this.wordGuessed = true;
    }
};

module.exports = word;

// var wordy = new word("perro");
// wordy.LetterArrayFill();
// //wordy.stringRep();
// wordy.stringEval("e");
// wordy.stringRep();
//console.log(wordy.letterArray);