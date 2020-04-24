"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
/**
 * Random Bracket
 *
 * Players are sorted randomly in bracket. Number of players must
 * be a power of two for tournament to proceed.
 */
class RandomBracket extends abstract_1.Bracket {
    /**
     * Calculate number of games in a round given number of players.
     *
     * @param round Round for which we are calculating games.
     * @param players List of players
     */
    games(round, players) {
        return players.length >> round;
    }
    /**
     * Perpare players for bracket.
     *
     * @param players List of players
     */
    prepare(players) {
        return players.slice().sort((a, b) => 0.5 - Math.random());
    }
    /**
     * Calculate number of rounds.
     *
     * @param players
     */
    rounds(players) {
        return Math.log2(players.length);
    }
    /**
     * Verify players meet bracket requirements.
     *
     * @param players List of players
     */
    verify(players) {
        const len = players.length;
        return len && 0 === (len & (len - 1));
    }
}
exports.RandomBracket = RandomBracket;
