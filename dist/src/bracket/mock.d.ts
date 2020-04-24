import { PlayerInterface } from "../interfaces";
import { Bracket } from "./abstract";
/**
 * Mock Bracket
 *
 * Used in unit testing for simpler mocks.
 */
export declare class MockBracket extends Bracket {
    mockGames: number;
    mockRounds: number;
    mockVerify: boolean;
    constructor(mockGames: number, mockRounds: number, mockVerify: boolean);
    games(round: number, players: PlayerInterface[]): number;
    prepare(players: PlayerInterface[]): PlayerInterface[];
    rounds(players: PlayerInterface[]): number;
    verify(players: PlayerInterface[]): boolean;
}
