import { strict as assert } from 'assert';
import _ from 'lodash'
import fromPairs from '../src/index.js';


const value1 = fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]);
const answer1 = { cat: 13, dog: 6 };

assert.deepEqual(value1, answer1);