let word = require("./Word");
let inquirer = require("inquirer");

let gameWord = new word("perro");
gameWord.LetterArrayFill();
gameWord.stringRep();

let game = function() {
    if(!gameWord.wordGuessed) {
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a Letter: ",
                name: "letter"
            },
        ]).then(function(response){
            gameWord.stringEval(response.letter);
            gameWord.stringRep();
            gameWord.wordGuessedEval();
            game();
        });
    }
};
game();