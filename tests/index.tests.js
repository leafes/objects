import fromPairs from '../src/index.js';
import _ from 'lodash'
const value1 = fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]);
const answer1 = { cat: 111, dog: 6 };

if (_.isEqual(value1, answer1)) { 
	console.log('all right'); 
} else {
	throw new Error(`Function works wrong!`);
};