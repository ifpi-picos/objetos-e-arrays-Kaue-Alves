import addMovie from "./addMovie.js"
import sortList from "../modules/sortList.js"
import searchMovie from "./searchMovie.js"
import showOneList from "./showOneList.js"
import markAsAttended from "./markAsAttended.js"
import removeMovie from "../modules/removeMovie.js"

let listOfMovies = []
let listOfMoviesWatched = [{title: "Blade Runner 2047", year: "1982"}]

export default function options(message) {
    let i = true
    while (i) {
        console.log(message);
        let option = Number(prompt('Digite o número da operação: '))
        switch(option){
            case 1:
                addMovie(listOfMovies)
                break
            case 2:
                sortList(listOfMovies, listOfMoviesWatched)
                break
            case 3:
                searchMovie(listOfMovies)
                break
            case 4:
                showOneList(listOfMovies, listOfMoviesWatched)
                break
            case 5:
                markAsAttended(listOfMovies, listOfMoviesWatched)
                break
            case 6:
                removeMovie(listOfMovies)
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