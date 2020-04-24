import { PlayerInterface } from './interfaces';
export declare class Player implements PlayerInterface {
    readonly name: string;
    meta: {
        [index: string]: any;
    };
    constructor(name: string);
}
