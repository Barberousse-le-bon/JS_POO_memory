import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{

    #card;
    constructor()
    {
        super();
    }


    getCard(){


        return this.#card;

    }


    createCard(){

        
        let valueCard = Math.floor(Math.random()*0xF3)+0x1F90C;


        this.#card = new Card(valueCard);
        



        this.notify();

    }
}