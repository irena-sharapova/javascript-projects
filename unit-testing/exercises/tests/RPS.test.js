const test_module = require('../RPS.js');


describe("whoWon", function () {

    test("If both players have the same ... ", function () {
        let output = test_module.whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
        let output = test_module.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
        let output = test_module.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function () {
        let output = test_module.whoWon('scissors', 'rock');
        expect(output).toEqual("Player 2 wins!");
    });

});
