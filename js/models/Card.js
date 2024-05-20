export class Card{

    #value;


    
  
    constructor (_value) {
        
        this.#value = _value;
        

    }
    

    getValue(){


        return this.#value;
    }



}