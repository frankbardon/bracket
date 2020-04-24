import { GameInstance } from './game';
export interface GameInterface {
    name: string;
    create(one: PlayerInterface, two: PlayerInterface): GameInstance;
    determine(instance: GameInstance): PlayerInterface;
}
export interface PlayerInterface {
    name: string;
    meta: {
        [index: string]: any;
    };
}
export interface BracketInterface {
    prepare(players: PlayerInterface[]): PlayerInterface[];
    rounds(players: PlayerInterface[]): number;
    games(round: number, players: PlayerInterface[]): number;
    verify(players: PlayerInterface[]): boolean;
}
export interface TournamentInterface {
    readonly bracket: BracketInterface;
    readonly game: GameInterface;
    players: PlayerInterface[];
    register(player: PlayerInterface): any;
    registered(player: PlayerInterface): any;
    initialize(): any;
}
