import { ApplicationMemory } from "../application/application-memory.js";


export class Memory{



    #cards;

    constructor(){

        this.#cards = [];


    }

    newGame(pairsNumber){


        for (let i = 0; i < pairsNumber; i++) {
            

            let newPair = new ApplicationMemory();
            this.#cards.push(newPair);
            this.#cards.push(newPair);
            console.log(newPair);
        }
        
        
        console.log(this.#cards);
    }

    getCardsNumber(){

        return this.#cards.length;


    }



    getCard(index){



        return this.#cards[index];
    }










}