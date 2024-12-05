/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const vowelsCounter = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for (let i = 0 ; i < word.length; i++){
        for (let n = 0; n < vowels.length; n++){
            if (word[i] === vowels[n]){
                counter++
            }
        }
    }
    return counter
}


// Invoca la funzione qui e stampa il risultato in console

console.log( vowelsCounter(word) )

//Risultato atteso se si passa 'javascript': 3 (a, a, i)