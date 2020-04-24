import { runSampleAsync } from '../src/sample';
import { SkillGame } from '../src/game';
import { SimilarSkillsBracket } from '../src/bracket';

runSampleAsync(new SimilarSkillsBracket(), new SkillGame());
