export default function searchItem(list) {
    if(list.length > 0) {
        let titleMovie = prompt("Digite o nome do filme: ").toLowerCase()
        let foundMovie = list.find(movie => movie.title.toLowerCase() === titleMovie)

        if (foundMovie) {
            console.log(`\nO filme [ ${foundMovie.title} (${foundMovie.year}) ] está na lista.`)
        } else {
            console.log(`\nO filme [ ${titleMovie} ] não está na lista.`)
        }
    } else {
        console.log("\nA lista está vazia.")
    }
}