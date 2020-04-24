"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Instance of game.
 *
 * Holds the game, and both players. Allows us to control the
 * game flow.
 */
class GameInstance {
    constructor(game, one, two) {
        this.game = game;
        this.one = one;
        this.two = two;
    }
    run() {
        return this.game.determine(this);
    }
    async runAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.game.determine(this));
            }, Math.floor(Math.random() * 3) * 1000);
        });
    }
}
exports.GameInstance = GameInstance;
