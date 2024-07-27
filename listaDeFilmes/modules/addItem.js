export default function addItem(list) {
    let item = prompt("Digite o nome do item: ")
    if(item) {
        list.push(item)
        console.log(`[ ${item} ] foi adicionado à lista.`);
    } else {
        console.log("Você não digitou nada.");
    }
    
}