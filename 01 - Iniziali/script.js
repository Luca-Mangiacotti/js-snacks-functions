/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const initNames = (namesList) => {
    let initList = [""]
    for (let i = 0; i < namesList.length; i++){
            initList[i] = namesList[i].charAt(0)
            
        }
    return initList
    }

// Invoca la funzione qui e stampa il risultato in console

console.log(initNames(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]