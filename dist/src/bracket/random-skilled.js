"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./random");
/**
 * Random (Skilled) Bracket
 *
 * Same as random bracket, but all players must meet a minimum
 * skill requirement.
 */
class RandomSkilledBracket extends random_1.RandomBracket {
    constructor(requiredSkill) {
        super();
        this.requiredSkill = requiredSkill;
    }
    /**
     * Verify players meet bracket requirements.
     *
     * @param players List of players
     */
    verify(players) {
        let playersMeetSkillReqs = true;
        players.forEach(p => {
            if (playersMeetSkillReqs && p.meta.skill <= this.requiredSkill) {
                playersMeetSkillReqs = false;
            }
        });
        return super.verify(players) && playersMeetSkillReqs;
    }
}
exports.RandomSkilledBracket = RandomSkilledBracket;
