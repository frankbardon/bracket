import { Tournament } from "./tournament";
import { Player } from "./player";
import loadedPlayers from "../data/players.json";
import { createRuntime, createAsyncRuntime } from "./runtime";
import { BracketInterface, GameInterface, PlayerInterface } from './interfaces';


export function runSampleAsync(
  bracket: BracketInterface,
  game: GameInterface,
  numPlayers = 32
) {

  const tournament = new Tournament(bracket, game);

  for (let i = 0; i < numPlayers; i++) {
    const player = new Player(loadedPlayers[i].name);
    player.meta = loadedPlayers[i].meta;
    tournament.register(player);
  }

  tournament.initialize();

  const rounds = bracket.rounds(tournament.players);
  const runtime = createAsyncRuntime(tournament, (_tournament, _round, _players) => {
    console.log(
      "Winners of round",
      _round,
      _players.map((p) => p.name).join(", ")
    );
  });

  console.log(game.name);
  console.log("=".repeat(game.name.length + 1));
  console.log();
  console.log(
    `${tournament.players.length} players competing over ${rounds} rounds`
  );

  runtime(tournament.players).then((winner) =>
    console.log("Winner!", winner.name)
  );
}

export function runSample(
  bracket: BracketInterface,
  game: GameInterface,
  numPlayers = 32
) {
  const tournament = new Tournament(bracket, game);

  for (let i = 0; i < numPlayers; i++) {
    const player = new Player(loadedPlayers[i].name);
    player.meta = loadedPlayers[i].meta;
    tournament.register(player);
  }

  tournament.initialize();

  const rounds = bracket.rounds(tournament.players);
  const runtime = createRuntime(
    tournament,
    (_tournament, _round, _players) => {
      console.log(
        "Winners of round",
        _round,
        _players.map((p) => p.name).join(", ")
      );
    }
  );

  console.log(game.name);
  console.log("=".repeat(game.name.length + 1));
  console.log();
  console.log(
    `${tournament.players.length} players competing over ${rounds} rounds`
  );

  const winner = runtime(tournament.players);
  console.log("Winner!", winner.name)
}
