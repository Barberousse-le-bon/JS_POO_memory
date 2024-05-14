import { Card } from "../models/card.js";
//import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{

    #card;
    constructor()
    {
        super();
    }


    getCard(){


        return this.#card.getCard();

    }


    createCard(){


        value = Math.random()*0xF3+0x1f90c;

        console.log(value);

        this.#card = new Card(value);

    }
}