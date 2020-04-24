import { PlayerInterface } from "../interfaces";
import { RandomBracket } from "./random";
/**
 * Random (Skilled) Bracket
 *
 * Same as random bracket, but all players must meet a minimum
 * skill requirement.
 */
export declare class RandomSkilledBracket extends RandomBracket {
    private requiredSkill;
    constructor(requiredSkill: number);
    /**
     * Verify players meet bracket requirements.
     *
     * @param players List of players
     */
    verify(players: PlayerInterface[]): boolean;
}
