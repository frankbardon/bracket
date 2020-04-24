"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
/**
 * Mock Bracket
 *
 * Used in unit testing for simpler mocks.
 */
class MockBracket extends abstract_1.Bracket {
    constructor(mockGames, mockRounds, mockVerify) {
        super();
        this.mockGames = mockGames;
        this.mockRounds = mockRounds;
        this.mockVerify = mockVerify;
    }
    games(round, players) {
        return this.mockGames;
    }
    prepare(players) {
        return players.slice();
    }
    rounds(players) {
        return this.mockRounds;
    }
    verify(players) {
        return this.mockVerify;
    }
}
exports.MockBracket = MockBracket;
