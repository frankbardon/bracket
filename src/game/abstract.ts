import { GameInterface, PlayerInterface } from "../interfaces";
import { GameInstance } from './instance';

/**
 * Abstract Game
 */
export abstract class Game implements GameInterface {

  name = 'Abstract';

  /**
   * Create a new game instance.
   *
   * @param one First player
   * @param two Second player
   */
  create(one: PlayerInterface, two: PlayerInterface): GameInstance {
    return new GameInstance(this, one, two);
  }

  /**
   * Determine who won the game.
   *
   * @param instance Game instance.
   */
  abstract determine(instance: GameInstance): PlayerInterface;
}
