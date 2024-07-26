// Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [
    { nome: 'Fusca', ano: 1969 },
    { nome: 'Gol', ano: 2000 },
    { nome: 'Uno', ano: 1995 },
    { nome: 'Corsa', ano: 2015 },
    { nome: 'Celta', ano: 2016 },
]

const carrosFiltrados = carros.filter((carro) => carro.ano > 2010)
console.log(carrosFiltrados);