const brain = require('brain.js')
var fs = require('fs')

const lstm = new brain.recurrent.LSTM();
const json= JSON.parse(fs.readFileSync('trained-net.json'))

lstm.fromJSON(json)
const run1 = lstm.run('saw');
const run2 = lstm.run('Doug');
const run3 = lstm.run('Spot');
const run4 = lstm.run('It');

console.log('run 1: Jane' + run1);
console.log('run 2: Doug' + run2);
console.log('run 3: Spot' + run3);
console.log('run 4: It' + run4);
