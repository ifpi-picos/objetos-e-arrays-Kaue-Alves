export default function searchItem(list) {
    if(list.length > 0) {
        let item = prompt("Digite o nome do item: ").toLowerCase()
        let foundItem = list.find(list => list.toLowerCase() === item)
        if (foundItem) {
            console.log(`O item ${item} está na lista.`)
        } else {
            console.log(`O item ${item} não está na lista.`)
        }
    } else {
        console.log("A lista está vazia.")
    }
}