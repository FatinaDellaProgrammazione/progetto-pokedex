window.alert('sono tornata figli di puttana')

//PASSO 1:dobbiamo creare una variabile in JS per lavorare con la lista del pokedex//
const listaSelezionePokemon = document.querySelectorAll(".pokedev");

//PASS0 2: Identificare l'evento "click" dell'elemento nella lista//
listaSelezionePokemon.forEach(pokedev => (
    pokedev.addEventListener("click", () => {
        //PASSO 3: rimuovere la classe "aperto" solo dalla carta aperta//
        nascondereCartaPokedev();

        //PASSO 4: al click sul pokemon della lista prendiamo l'id di questo pokedev per capire quale carta aprire//
        const idPokedevSelezionato = pokedev.attributes.id.value;
        const idCartaPokedevDaAprire = "carta-" +idPokedevSelezionato;
        const cartaPokedevDaAprire = document.getElementById(idCartaPokedevDaAprire);
        cartaPokedevDaAprire.classList.add("aperto");

        //PASSO 5: rimuovere la classe attivo che marca il pokedev selezionato nella lista//
        const pokedevAttivoNellaLista = document.querySelector(".attivo");
        pokedevAttivoNellaLista.classList.remove("attivo");
        //PASSO 6: aggiungere la classe attivo nel pokedev selezionato nella lista//
        const pokedevSelezionatoNellaLista = document.getElementById(idPokedevSelezionato);
        pokedevSelezionatoNellaLista.classList.add("attivo");
         
        
    })
))


function nascondereCartaPokedev() {
    const cartaPokemonAperta = document.querySelector(".aperto");
    cartaPokemonAperta.classList.remove("aperto");
}
//per convertire in funzioni seleziona le righe che vuoi convertire, tasto destro=>refactor=>estract to factor in global scope=> metti nome tutto attaccato//

