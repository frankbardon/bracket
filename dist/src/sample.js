"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tournament_1 = require("./tournament");
const player_1 = require("./player");
const players_json_1 = tslib_1.__importDefault(require("../data/players.json"));
const runtime_1 = require("./runtime");
function runSampleAsync(bracket, game, numPlayers = 32) {
    const tournament = new tournament_1.Tournament(bracket, game);
    for (let i = 0; i < numPlayers; i++) {
        const player = new player_1.Player(players_json_1.default[i].name);
        player.meta = players_json_1.default[i].meta;
        tournament.register(player);
    }
    tournament.initialize();
    const rounds = bracket.rounds(tournament.players);
    const runtime = runtime_1.createAsyncRuntime(tournament, (_tournament, _round, _players) => {
        console.log("Winners of round", _round, _players.map((p) => p.name).join(", "));
    });
    console.log(game.name);
    console.log("=".repeat(game.name.length + 1));
    console.log();
    console.log(`${tournament.players.length} players competing over ${rounds} rounds`);
    runtime(tournament.players).then((winner) => console.log("Winner!", winner.name));
}
exports.runSampleAsync = runSampleAsync;
function runSample(bracket, game, numPlayers = 32) {
    const tournament = new tournament_1.Tournament(bracket, game);
    for (let i = 0; i < numPlayers; i++) {
        const player = new player_1.Player(players_json_1.default[i].name);
        player.meta = players_json_1.default[i].meta;
        tournament.register(player);
    }
    tournament.initialize();
    const rounds = bracket.rounds(tournament.players);
    const runtime = runtime_1.createRuntime(tournament, (_tournament, _round, _players) => {
        console.log("Winners of round", _round, _players.map((p) => p.name).join(", "));
    });
    console.log(game.name);
    console.log("=".repeat(game.name.length + 1));
    console.log();
    console.log(`${tournament.players.length} players competing over ${rounds} rounds`);
    const winner = runtime(tournament.players);
    console.log("Winner!", winner.name);
}
exports.runSample = runSample;
