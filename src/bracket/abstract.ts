import { BracketInterface, PlayerInterface } from "../interfaces";

/**
 * Bracket Interface
 *
 * Functionality related to figuring out who plays, and when.
 */
export abstract class Bracket implements BracketInterface {

  /**
   * Calculate the number of games in a given round.
   *
   * @param round Round for which we need game counts.
   * @param players List of players
   */
  abstract games(round: number, players: PlayerInterface[]): number;

  /**
   * Perpare the bracket for a tournament.
   *
   * @param players List of players
   */
  abstract prepare(players: PlayerInterface[]): PlayerInterface[];

  /**
   * Calculate the number of rounds the bracket will require.
   *
   * @param players List of players
   */
  abstract rounds(players: PlayerInterface[]): number;

  /**
   * Validate that the bracket requirements are met.
   *
   * @param players List of players
   */
  abstract verify(players: PlayerInterface[]): boolean;
}
