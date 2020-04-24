import { GameInterface, PlayerInterface } from "../interfaces";

/**
 * Instance of game.
 *
 * Holds the game, and both players. Allows us to control the
 * game flow.
 */
export class GameInstance {
  constructor(
    public readonly game: GameInterface,
    public readonly one: PlayerInterface,
    public readonly two: PlayerInterface
  ) {}

  run(): PlayerInterface {
    return this.game.determine(this);
  }

  async runAsync(): Promise<PlayerInterface> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.game.determine(this));
      }, Math.floor(Math.random() * 3) * 1000);
    });
  }
}
