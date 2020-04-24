import { PlayerInterface } from "../interfaces";
import { Bracket } from "./abstract";

/**
 * Similar Skills Bracket
 *
 * Players are sorted by their skill levels. Number of players
 * must be a power of two for tournament to proceed.
 */
export class SimilarSkillsBracket extends Bracket {
  /**
   * Calculate number of games in a round given number of players.
   *
   * @param round Round for which we are calculating games.
   * @param players List of players
   */
  games(round: number, players: PlayerInterface[]): number {
    return players.length >> round;
  }

  /**
   * Perpare players for bracket.
   *
   * @param players List of players
   */
  prepare(players: PlayerInterface[]): PlayerInterface[] {
    return players.slice().sort((a, b) => a.meta.skill > b.meta.skill ? 1 : -1);
  }

  /**
   * Calculate number of rounds.
   *
   * @param players
   */
  rounds(players: PlayerInterface[]): number {
    return Math.log2(players.length);
  }

  /**
   * Verify players meet bracket requirements.
   *
   * @param players List of players
   */
  verify(players: PlayerInterface[]): boolean {
    const len = players.length;

    return len && 0 === (len & (len - 1));
  }
}
