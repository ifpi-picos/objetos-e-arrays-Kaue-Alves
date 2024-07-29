import showList from "./showList"

export default function sortList(list, listWatched) {

    let choice = Number(prompt("[1] - Ordenar por titulo\n[2] - Ordenar por ano\n => "))

    switch(choice) {
        case 1:
            if(list.length > 0 || listWatched > 0) {
                list.sort((a, b) => a.title.localeCompare(b.title))
                listWatched.sort((a, b) => a.title.localeCompare(b.title))
                console.log("As listas foram ordenadas.");
                showList(list)
                console.log("\n-----------");
                showList(listWatched)
            } else {
                console.log("As listas estão vazias.");
            }
            break
        case 2:
            if(list.length > 0 || listWatched > 0) {
                list.sort((a, b) => a.year - b.year)
                listWatched.sort((a, b) => a.year - b.year)
                console.log("As listas foram ordenadas.");
                showList(list) 
                console.log("-----------");
                showList(listWatched)
            } else {
                console.log("As listas estão vazias.");
            }
            break
        default:
            console.log("Opção inválida.");
    }
}