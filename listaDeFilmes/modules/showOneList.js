export default function showOneList(list, listWatched) {
    let choice = Number(prompt("[1] - Para assistir\n[2] - Assistidos\n"))

    switch(choice) {
        case 1:
            if(list.length > 0) {
                list.forEach((movie, index) => {
                    console.log(`${index} - ${movie.title} (${movie.year})`);
                });
            } else {
                console.log("A lista está vazia.");
            }
            break
        case 2:
            if(listWatched.length > 0) {
                listWatched.forEach((movie, index) => {
                    console.log(`${index} - ${movie.title} (${movie.year})`);
                });
            } else {
                console.log("A lista está vazia.");
            }
            break
        default:
            console.log("Opção inválida.");
    }
}