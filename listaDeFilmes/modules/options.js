import addItem from "../modules/addItem"
import removeItem from "../modules/removeItem"
import searchItem from "../modules/searchItem"
import sortList from "../modules/sortList.js"
import showList from "../modules/showList"
import cleanList from "../modules/cleanList.js"

let listOfItems = []

export default function options(message) {
    let i = true
    while (i) {
        console.log(message);
        let option = Number(prompt('Digite o número da operação: '))
        switch(option){
            case 1:
                addItem(listOfItems)
                break
            case 2:
                removeItem(listOfItems)
                break
            case 3:
                searchItem(listOfItems)
                break
            case 4:
                sortList(listOfItems)
                break
            case 5:
                showList(listOfItems)
                break
            case 6:
                listOfItems = cleanList(listOfItems)
                break
            case 9:
                console.log("Encerrando...");
                i = false
                break
            default:
                console.log("Opção inválida");
        }
    }
} 