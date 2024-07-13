const produto = {
    nome: "Furadeira e Parafusadeira Wap a Bateria 12V com Maleta 13 Peças BPF 12K3",
    preco: 189.91,
    quantidade: 17
}

console.log(
    `
    Valor total do estoque de: ${produto.nome}
    => R$ ${produto.preco * produto.quantidade}
    `
)