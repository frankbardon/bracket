import { PlayerInterface } from "../interfaces";
import { GameInstance } from "./instance";
import { Game } from './abstract'

/**
 * Game of Chance
 *
 * A game where the winning is a random affair.
 */
export class ChanceGame extends Game {

  name = 'Game of Chance';

  determine(instance: GameInstance): PlayerInterface {
    return Math.random() > 0.5
      ? instance.one
      : instance.two;
  }
}
