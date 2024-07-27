export default function showList(list) {
    console.log("LISTA DE COMPRAS\n");
    if(list.length > 0) {
        list.forEach((item, index) => {
            console.log(`${index} - ${item}`);
        });
    } else {
        console.log("A lista está vazia.");
    }
}