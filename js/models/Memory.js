import { ApplicationMemory } from "../application/application-memory.js";


export class Memory{



    #cards;

    constructor(){

        this.#cards = [];


    }

    newGame(pairsNumber){


        for (let i = 0; i < pairsNumber; i++) {
            
            this.#cards.push(new ApplicationMemory());
        }
        //let newPair = new ApplicationMemory();



    }

    getCardsNumber(){




    }



    getCard(index){



        return this.#cards;
    }










}