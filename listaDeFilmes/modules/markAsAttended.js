export default function markAsAttended(list, listWatched) {
    if(list.length > 0) {

        let choice = Number(prompt(`\nMarcar o filme [ ${list[0].title} ] como assistido?\n[1] - Sim\n[2] - Não\n\Digite o número da opção: `))
    
        switch(choice) {
            case 1:
                let movie = list.shift()
                listWatched.push(movie)
                console.log(`\nO filme foi marcado como assistido.`)
                break
            case 2:
                break
            default:
                console.log("\nOpção inválida.");
        }
    } else {
        console.log("\nA lista está vazia.");
    }
}