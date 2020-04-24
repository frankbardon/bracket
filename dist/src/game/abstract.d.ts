import { GameInterface, PlayerInterface } from "../interfaces";
import { GameInstance } from './instance';
/**
 * Abstract Game
 */
export declare abstract class Game implements GameInterface {
    name: string;
    /**
     * Create a new game instance.
     *
     * @param one First player
     * @param two Second player
     */
    create(one: PlayerInterface, two: PlayerInterface): GameInstance;
    /**
     * Determine who won the game.
     *
     * @param instance Game instance.
     */
    abstract determine(instance: GameInstance): PlayerInterface;
}
