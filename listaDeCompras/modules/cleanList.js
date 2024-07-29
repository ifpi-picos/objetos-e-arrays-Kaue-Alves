export default function cleanList(list) {
    if (list.length === 0) {
        console.log("A lista está vazia.");
    } else {
        let confirmation = Number(prompt("Digite 1 para confirmar: "))
        if (confirmation === 1) {
            list = []
            console.log("A lista foi limpa.");
            return list
        } else {
            console.log("A lista NÃO foi limpa.");
        }
    }
}