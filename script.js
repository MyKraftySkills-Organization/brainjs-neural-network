const net = new brain.NeuralNetwork({
    // hiddenLayers: [4, 5, 6]
})
const data = [
    {
        input: { r: 0, g: 0, b: 0 },
        output: [1]
    },
    {
        input: { r: 1, g: 1, b: 1 },
        output: [0]
    },

]

net.train(data)

const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')

const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')

let color
setRandomColor()


whiteButton.addEventListener('click', () => {
    chooseColor(1);
})
blackButton.addEventListener('click', ()=> {
    chooseColor(0);
})
printButton.addEventListener('click', ()=> {
   print(0);
})
function print(){
    console.log(JSON.stringify(data))
}
function chooseColor(val) {
    data.push({
        input: color,
        output:[val]
    })
    setRandomColor()
}
function setRandomColor(){
    color = { 
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }
    const guess = net.run(color)[0]
    guessE1.style.color = guess > .5 ? '#fff' : '#000'
    colorE1.style.backgroundColor = 
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}