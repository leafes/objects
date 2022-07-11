import _ from 'lodash';

const fromPairs = (pairs) => pairs
  .reduce((acc, pair) => {
    const [key, value] = pair;
    return { ...acc, [key]: value }
  }, {})
console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));

export default fromPairs;
// { 'cat': 11, 'dog': 6 }