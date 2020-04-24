"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
class Tournament {
    constructor(bracket, game) {
        this.bracket = bracket;
        this.game = game;
        this.players = [];
    }
    get rounds() {
        return this.bracket.rounds(this.players);
    }
    /**
     * Test if a player is already registered.
     *
     * @param player Registered player
     */
    registered(player) {
        return this.players.includes(player);
    }
    /**'
     * Register a player for the tournament.
     *
     * @param player Registered player
     */
    register(player) {
        if (this.registered(player)) {
            throw new Error('Player already registered');
        }
        this.players.push(player);
    }
    /**
     * Setup the tournament.
     */
    initialize() {
        if (!this.bracket.verify(this.players)) {
            throw new Error('Bracket rules failure.');
        }
        return this.bracket.prepare(this.players);
    }
    /**
     * Play a round.
     *
     * @param round Round number.
     * @param players Players in round.
     */
    async playAsync(players) {
        const instances = [];
        this.chunk(players, 2).forEach(chunk => {
            instances.push(new game_1.GameInstance(this.game, chunk[0], chunk[1]));
        });
        return Promise.all(instances.map(i => i.runAsync()));
    }
    play(players) {
        const instances = [];
        this.chunk(players, 2).forEach((chunk) => {
            instances.push(new game_1.GameInstance(this.game, chunk[0], chunk[1]));
        });
        return instances.map(i => i.run());
    }
    chunk(arr, size) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
    }
}
exports.Tournament = Tournament;
