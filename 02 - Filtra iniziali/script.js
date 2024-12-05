/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const initNames = (namesList, initChar) => {
    let initList = []
    for (let i = 0; i < namesList.length; i++){
            if (initChar === namesList[i].charAt(0)){
                initList.push(namesList[i])
            }
            
        }
    return initList
    }


// Invoca la funzione qui e stampa il risultato in console

console.log(initNames(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]