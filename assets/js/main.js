/* 

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:

    per i multipli di 3 stampi “Fizz” al posto del numero

    e per i multipli di 5 stampi “Buzz”.

    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Buon lavoro e buon divertimento! confermate lettura come al solito :baby-yoda:
PS. in allegato lo screenshot inclusi i bonus. (modificato) 

*/

/* 

Tools
- console.log
- if/else
- for
- %
- let/const

*/

// creo un ciclo che stampi in console i numeri da 1 a 100

let listElement = document.getElementById('list');

for (let i = 1; i <= 100; i++) {
    //console.log(i);

    const liElement = document.createElement('li');    

    if ((i % 3) == 0 && (i % 5)== 0) {
        // se % 3 AND % 5 lascia 0 stampo FizzBuzz

        console.log('FizzBuzz');
        liElement.append('FizzBuzz');
        listElement.append(liElement);

    } else if ((i % 3) == 0) {
        // se il numero % 3 lascia 0 allora stampo Fizz

        console.log('Fizz');
        liElement.append('Fizz');
        listElement.append(liElement);

    } else if ((i % 5) == 0) {
    // se il numero % 5 lascia 0 stampo buzz

        console.log('Buzz');
        liElement.append('Buzz');
        listElement.append(liElement);

    } else {
        // altrimenti stampo il numero

        console.log(i);
        liElement.append(i);
        listElement.append(liElement);
    }

    
    


}






