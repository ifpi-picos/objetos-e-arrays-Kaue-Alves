// Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.
const nome = (nome) => {
    let nomeSeparado = nome.split(" ")
    let ultimoIndice = nomeSeparado.length - 1
    
    console.log(nomeSeparado[0], nomeSeparado[ultimoIndice]);
}

nome(prompt("Digite seu nome completo"))
