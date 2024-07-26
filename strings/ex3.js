// Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.

const nome = (nome) => {
    let nomeSeparado = nome.split(" ")
    console.log(nomeSeparado[0]);
}

nome(prompt("Digite seu nome completo"))
