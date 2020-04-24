import { PlayerInterface } from './interfaces';

export class Player implements PlayerInterface {

  public meta: { [index: string]: any } = {};

  constructor(public readonly name: string) { }
}
