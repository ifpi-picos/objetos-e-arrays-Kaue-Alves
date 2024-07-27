import showList from "../modules/showList"

export default function removeItem(list) {
    showList(list)
    if(list.length > 0) {
        let index = Number(prompt("Digite o indice do item: "))
        if(index >= 0 && index < list.length){
            list.splice(index, 1)
            console.log("O item foi removido com sucesso.");
        }
        else{
            console.log("O indice digitado não existe.");
        }
    }
}