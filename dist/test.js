"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tournament_1 = require("./src/tournament");
const bracket_1 = require("./src/bracket");
const player_1 = require("./src/player");
const game_1 = require("./src/game");
const players_json_1 = tslib_1.__importDefault(require("./data/players.json"));
const runtime_1 = require("./src/runtime");
const bracket = new bracket_1.RandomSkilledBracket(1);
const game = new game_1.SkillGame();
const tournament = new tournament_1.Tournament(bracket, game);
// Register players for the tournament.
for (let i = 0; i < 16; i++) {
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
console.log('='.repeat(game.name.length + 1));
console.log();
console.log(`${tournament.players.length} players competing over ${rounds} rounds`);
runtime(tournament.players)
    .then(winner => console.log('Winner!', winner.name));
