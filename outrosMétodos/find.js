// Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.

const pessoas = [
    {nome: 'Ana', idade: 16},
    {nome: 'Carlos', idade: 18},
    {nome: 'Maria', idade: 20},
]

console.log(pessoas.find((pessoa) => pessoa.idade > 18));