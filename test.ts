import { Tournament } from "./src/tournament";
import { RandomSkilledBracket } from './src/bracket';
import { Player } from './src/player';
import { SkillGame } from './src/game';
import loadedPlayers from './data/players.json';
import { createAsyncRuntime } from './src/runtime';

const bracket = new RandomSkilledBracket(1);
const game = new SkillGame();
const tournament = new Tournament(bracket, game);

// Register players for the tournament.
for (let i = 0; i < 16; i++) {
  const player = new Player(loadedPlayers[i].name);
  player.meta = loadedPlayers[i].meta;
  tournament.register(player);
}

tournament.initialize();

const rounds = bracket.rounds(tournament.players);
const runtime = createAsyncRuntime(tournament, (_tournament, _round, _players) => {
  console.log("Winners of round", _round, _players.map((p) => p.name).join(", "));
});

console.log(game.name);
console.log('='.repeat(game.name.length + 1));
console.log();
console.log(`${tournament.players.length} players competing over ${rounds} rounds`);

runtime(tournament.players)
  .then(winner => console.log('Winner!', winner.name));

