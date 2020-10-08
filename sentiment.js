const net = new brain.recurrent.LSTM();

net.train([
  'doe, a deer, a female deer',
  'ray, a drop of golden sun',
  'me, a name I call myself',
]);
re
const output = net.run('doe'); // ', a deer, a female deer'
console.log(output);

const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

