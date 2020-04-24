import { Tournament } from './tournament';
import { PlayerInterface } from './interfaces';
declare type RuntimeCallback = (tournament: Tournament, round: number, players: PlayerInterface[]) => any;
export declare function createAsyncRuntime(tournament: Tournament, callback?: RuntimeCallback): (players: PlayerInterface[]) => Promise<PlayerInterface>;
export declare function createRuntime(tournament: Tournament, callback?: RuntimeCallback): (players: PlayerInterface[]) => PlayerInterface;
export {};
