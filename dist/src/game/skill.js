"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
/**
 * Game of Skill
 *
 * A game where the person with the greatest skill always
 * wins, no matter what.
 */
class SkillGame extends abstract_1.Game {
    constructor() {
        super(...arguments);
        this.name = 'Game of Skill';
    }
    determine(instance) {
        return instance.one.meta.skill > instance.two.meta.skill
            ? instance.one
            : instance.two;
    }
}
exports.SkillGame = SkillGame;
