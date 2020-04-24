import { TournamentInterface, BracketInterface, PlayerInterface, GameInterface } from './interfaces';
import { GameInstance, Game } from './game';

export class Tournament implements TournamentInterface {

  public players: PlayerInterface[] = [];

  get rounds(): number {
    return this.bracket.rounds(this.players);
  }

  constructor(
    public readonly bracket: BracketInterface,
    public readonly game: GameInterface
  ) {}

  /**
   * Test if a player is already registered.
   *
   * @param player Registered player
   */
  registered(player: PlayerInterface): boolean {
    return this.players.includes(player);
  }

  /**'
   * Register a player for the tournament.
   *
   * @param player Registered player
   */
  register(player: PlayerInterface) {
    if (this.registered(player)) {
      throw new Error('Player already registered');
    }

    this.players.push(player);
  }

  /**
   * Setup the tournament.
   */
  initialize(): PlayerInterface[] {
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
  async playAsync(players: PlayerInterface[]) {
    const instances = [];

    this.chunk(players, 2).forEach(chunk => {
      instances.push(new GameInstance(this.game, chunk[0], chunk[1]));
    })

    return Promise.all(instances.map(i => i.runAsync()));
  }

  play(players: PlayerInterface[]) {
    const instances = [];

    this.chunk(players, 2).forEach((chunk) => {
      instances.push(new GameInstance(this.game, chunk[0], chunk[1]));
    });

    return instances.map(i => i.run());
  }

  private chunk(arr, size)  {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }
}
