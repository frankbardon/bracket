import { PlayerInterface } from "../interfaces";
import { RandomBracket } from "./random";

/**
 * Random (Skilled) Bracket
 *
 * Same as random bracket, but all players must meet a minimum
 * skill requirement.
 */
export class RandomSkilledBracket extends RandomBracket {

  constructor(private requiredSkill: number) {
    super();
  }

  /**
   * Verify players meet bracket requirements.
   *
   * @param players List of players
   */
  verify(players: PlayerInterface[]): boolean {
    let playersMeetSkillReqs = true;

    players.forEach(p => {
      if (playersMeetSkillReqs && p.meta.skill <= this.requiredSkill) {
        playersMeetSkillReqs = false;
      }
    })

    return super.verify(players) && playersMeetSkillReqs;
  }
}
