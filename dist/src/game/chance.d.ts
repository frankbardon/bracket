import { PlayerInterface } from "../interfaces";
import { GameInstance } from "./instance";
import { Game } from './abstract';
/**
 * Game of Chance
 *
 * A game where the winning is a random affair.
 */
export declare class ChanceGame extends Game {
    name: string;
    determine(instance: GameInstance): PlayerInterface;
}
