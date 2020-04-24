import { PlayerInterface } from "../interfaces";
import { Bracket } from "./abstract";
/**
 * Similar Skills Bracket
 *
 * Players are sorted by their skill levels. Number of players
 * must be a power of two for tournament to proceed.
 */
export declare class SimilarSkillsBracket extends Bracket {
    /**
     * Calculate number of games in a round given number of players.
     *
     * @param round Round for which we are calculating games.
     * @param players List of players
     */
    games(round: number, players: PlayerInterface[]): number;
    /**
     * Perpare players for bracket.
     *
     * @param players List of players
     */
    prepare(players: PlayerInterface[]): PlayerInterface[];
    /**
     * Calculate number of rounds.
     *
     * @param players
     */
    rounds(players: PlayerInterface[]): number;
    /**
     * Verify players meet bracket requirements.
     *
     * @param players List of players
     */
    verify(players: PlayerInterface[]): boolean;
}
