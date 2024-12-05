/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = 'Mario';


// Dichiara la funzione qui.

const doGreet = (yourName) => {
    let greet = (``)
    let currentDate = new Date()
    let currentHour = currentDate.getHours()
    
    if( currentHour >=6 && currentHour <= 13){
        greet = (`Buongiorno ${yourName}`)
    }else if( currentHour >= 14 && currentHour <= 17 ) {
        greet = (`Buon Pomeriggio ${yourName}`)
    }else if ( currentHour >= 18 && currentHour <= 22 ) {
        greet = (`Buonasera ${yourName}`)
    }else {
        greet = (`Buonanotte ${yourName}`)
    }

    return greet
}


// Invoca la funzione qui e stampa il risultato in console

console.log( doGreet(userName) )
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.