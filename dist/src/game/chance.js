"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
/**
 * Game of Chance
 *
 * A game where the winning is a random affair.
 */
class ChanceGame extends abstract_1.Game {
    constructor() {
        super(...arguments);
        this.name = 'Game of Chance';
    }
    determine(instance) {
        return Math.random() > 0.5
            ? instance.one
            : instance.two;
    }
}
exports.ChanceGame = ChanceGame;
