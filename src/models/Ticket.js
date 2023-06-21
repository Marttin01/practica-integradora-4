import { crypto } from "../utils/criptografia.js"

export class Ticket{
    #code
    #purchase_datetime
    #amount
    #purcharser
    constructor({amount,purcharser}){
        this.#code = crypto.id(),
        this.#purchase_datetime = new Date().toLocaleString(),
        this.#amount = amount,
        this.#purcharser = purcharser
    }

    dto(){
        return {
            code:this.#code,
            purchase_datetime:this.#purchase_datetime,
            amount:this.#amount,
            purcharser:this.#purcharser
        }
    }
}