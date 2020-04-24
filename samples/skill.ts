import { runSampleAsync } from '../src/sample';
import { SkillGame } from '../src/game';
import { RandomBracket } from '../src/bracket';

runSampleAsync(new RandomBracket(), new SkillGame());
