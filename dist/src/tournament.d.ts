import { TournamentInterface, BracketInterface, PlayerInterface, GameInterface } from './interfaces';
export declare class Tournament implements TournamentInterface {
    readonly bracket: BracketInterface;
    readonly game: GameInterface;
    players: PlayerInterface[];
    get rounds(): number;
    constructor(bracket: BracketInterface, game: GameInterface);
    /**
     * Test if a player is already registered.
     *
     * @param player Registered player
     */
    registered(player: PlayerInterface): boolean;
    /**'
     * Register a player for the tournament.
     *
     * @param player Registered player
     */
    register(player: PlayerInterface): void;
    /**
     * Setup the tournament.
     */
    initialize(): PlayerInterface[];
    /**
     * Play a round.
     *
     * @param round Round number.
     * @param players Players in round.
     */
    playAsync(players: PlayerInterface[]): Promise<any[]>;
    play(players: PlayerInterface[]): any[];
    private chunk;
}
