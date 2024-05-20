import { ApplicationMemory} from "./application/application-memory.js"
import { Memory } from "./models/memory.js"

window.addEventListener("load", () => {
    //const app = new ApplicationMemory();


    const memory = new Memory();
    memory.newGame(5);

    



})