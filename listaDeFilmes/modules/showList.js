export default function showList(list) {
    console.log("");
    if(list.length > 0) {
        list.forEach((movie, index) => {
            console.log(`${index} - ${movie.title} (${movie.year})`);
        });
    } else {
        console.log("A lista está vazia.");
    }
}