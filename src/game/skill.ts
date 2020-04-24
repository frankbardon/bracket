import { PlayerInterface } from "../interfaces";
import { GameInstance } from "./instance";
import { Game } from './abstract'

/**
 * Game of Skill
 *
 * A game where the person with the greatest skill always
 * wins, no matter what.
 */
export class SkillGame extends Game {

  name = 'Game of Skill';

  determine(instance: GameInstance): PlayerInterface {
    return instance.one.meta.skill > instance.two.meta.skill
      ? instance.one
      : instance.two;
  }
}
