import showList from "../modules/showList"

export default function removeItem(list) {
    showList(list)
    if(list.length > 0) {

        let index = Number(prompt("\nDigite o indice do filme a ser removido:"))
        console.log(index);
        if(!isNaN(index) && index >= 0 && index < list.length){
            list.splice(index, 1)
            console.log("O filme foi removido com sucesso.");
        }
        else{
            console.log("O indice digitado não existe.");
        }
    }
}