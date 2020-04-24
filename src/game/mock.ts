import { PlayerInterface } from "../interfaces";
import { GameInstance } from "./instance";
import { Game } from "./abstract";

/**
 * Mock Game
 *
 * A game you can use to test other things.
 */
export class MockGame extends Game {
  name = "Game of Mocks";

  constructor(public winner: PlayerInterface) {
    super();
  }

  determine(instance: GameInstance): PlayerInterface {
    return this.winner;
  }
}
