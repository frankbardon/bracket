import { runSampleAsync } from '../src/sample';
import { ChanceGame } from '../src/game';
import { RandomBracket } from '../src/bracket';

runSampleAsync(new RandomBracket(), new ChanceGame());
