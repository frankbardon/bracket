import { PlayerInterface } from "../interfaces";
import { Bracket } from "./abstract";

/**
 * Mock Bracket
 *
 * Used in unit testing for simpler mocks.
 */
export class MockBracket extends Bracket {

  constructor(
    public mockGames: number,
    public mockRounds: number,
    public mockVerify: boolean
  ) {
    super();
  }

  games(round: number, players: PlayerInterface[]): number {
    return this.mockGames;
  }

  prepare(players: PlayerInterface[]): PlayerInterface[] {
    return players.slice();
  }

  rounds(players: PlayerInterface[]): number {
    return this.mockRounds;
  }

  verify(players: PlayerInterface[]): boolean {
    return this.mockVerify;
  }
}
