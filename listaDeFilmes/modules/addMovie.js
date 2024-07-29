export default function addItem(list) {
    let title = prompt("Digite o nome do filme: ")
    let year = Number(prompt("Digite o ano do filme: "))

    if (title !== null && title.length > 0 && !isNaN(year) && year > 1887) {
        list.push({ title: title, year: year });
        console.log(`[ ${title} ] foi adicionado à lista.`);
    } else {
        console.log("Você não digitou nada ou o ano é inválido.");
    }
}