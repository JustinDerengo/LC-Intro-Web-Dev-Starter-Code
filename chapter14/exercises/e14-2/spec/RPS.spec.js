const whoWon = require("../RPS.js");

describe("whoWon", function() {

    it("returns 'TIE!' when player1 === player2", function() {
        let result = whoWon('rock', 'rock');
        expect(result).toEqual("TIE!");
    })
})