import { Tournament } from './tournament';
import { PlayerInterface } from './interfaces';

type RuntimeCallback = (tournament: Tournament, round: number, players: PlayerInterface[]) => any;

export function createAsyncRuntime(tournament: Tournament, callback?: RuntimeCallback) {
  return async (players: PlayerInterface[]) => {
    return new Promise<PlayerInterface>(async (resolve, reject) => {
      for (let i = 1; i <= tournament.rounds; i++) {
        players = await tournament.playAsync(players);
        if (callback) {
          callback(tournament, i, players);
        }
      }

      return resolve(players[0]);
    })

  }
}

export function createRuntime(tournament: Tournament, callback?: RuntimeCallback) {
  return (players: PlayerInterface[]) => {
    for (let i = 1; i <= tournament.rounds; i++) {
      players = tournament.play(players);
      if (callback) {
        callback(tournament, i, players);
      }
    }

    return players[0];
  }
}

