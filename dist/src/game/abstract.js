"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
/**
 * Abstract Game
 */
class Game {
    constructor() {
        this.name = 'Abstract';
    }
    /**
     * Create a new game instance.
     *
     * @param one First player
     * @param two Second player
     */
    create(one, two) {
        return new instance_1.GameInstance(this, one, two);
    }
}
exports.Game = Game;
