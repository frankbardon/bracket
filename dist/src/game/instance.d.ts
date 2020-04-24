import { GameInterface, PlayerInterface } from "../interfaces";
/**
 * Instance of game.
 *
 * Holds the game, and both players. Allows us to control the
 * game flow.
 */
export declare class GameInstance {
    readonly game: GameInterface;
    readonly one: PlayerInterface;
    readonly two: PlayerInterface;
    constructor(game: GameInterface, one: PlayerInterface, two: PlayerInterface);
    run(): PlayerInterface;
    runAsync(): Promise<PlayerInterface>;
}
