"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
/**
 * Mock Game
 *
 * A game you can use to test other things.
 */
class MockGame extends abstract_1.Game {
    constructor(winner) {
        super();
        this.winner = winner;
        this.name = "Game of Mocks";
    }
    determine(instance) {
        return this.winner;
    }
}
exports.MockGame = MockGame;
