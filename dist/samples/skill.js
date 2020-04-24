"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_1 = require("../src/sample");
const game_1 = require("../src/game");
const bracket_1 = require("../src/bracket");
sample_1.runSampleAsync(new bracket_1.RandomBracket(), new game_1.SkillGame());
