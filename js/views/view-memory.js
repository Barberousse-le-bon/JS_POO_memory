import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    notify()
    {
        this.displayCards();
    }


    displayCards(){

        const plateau = document.querySelector(".cards");
        const card = document.createElement("div");
        
        console.log(this.#controllerMemory.getCard().getValue());
        
        
        card.innerHTML = "&#x"+ this.#controllerMemory.getCard().getValue().toString(16);
        card.classList.add("card");
        plateau.append(card);
    }
}