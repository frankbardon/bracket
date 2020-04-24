import { PlayerInterface } from "../interfaces";
import { GameInstance } from "./instance";
import { Game } from "./abstract";
/**
 * Mock Game
 *
 * A game you can use to test other things.
 */
export declare class MockGame extends Game {
    winner: PlayerInterface;
    name: string;
    constructor(winner: PlayerInterface);
    determine(instance: GameInstance): PlayerInterface;
}
