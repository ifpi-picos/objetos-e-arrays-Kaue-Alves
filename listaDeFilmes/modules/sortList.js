import showList from "./showList"

export default function sortList(list) {
    if(list.length > 0) {
        list.sort((a, b) => a.localeCompare(b))
        console.log("A lista foi ordenada.");
        showList(list)
    } else {
        console.log("A lista está vazia.");
    }
}