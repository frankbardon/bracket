"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAsyncRuntime(tournament, callback) {
    return async (players) => {
        return new Promise(async (resolve, reject) => {
            for (let i = 1; i <= tournament.rounds; i++) {
                players = await tournament.playAsync(players);
                if (callback) {
                    callback(tournament, i, players);
                }
            }
            return resolve(players[0]);
        });
    };
}
exports.createAsyncRuntime = createAsyncRuntime;
function createRuntime(tournament, callback) {
    return (players) => {
        for (let i = 1; i <= tournament.rounds; i++) {
            players = tournament.play(players);
            if (callback) {
                callback(tournament, i, players);
            }
        }
        return players[0];
    };
}
exports.createRuntime = createRuntime;
