const filmes = []
for (let i = 0; i < 5 ; i++) {
    filmes.push(prompt("Digite o nome do filme: "))
}

for (let i of filmes) {
    console.log(i);
}