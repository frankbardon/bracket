import { PlayerInterface } from "../interfaces";
import { GameInstance } from "./instance";
import { Game } from './abstract';
/**
 * Game of Skill
 *
 * A game where the person with the greatest skill always
 * wins, no matter what.
 */
export declare class SkillGame extends Game {
    name: string;
    determine(instance: GameInstance): PlayerInterface;
}
