import { crypto } from "../utils/criptografia.js"

export class Producto {
    #title
    #description
    #stock
    #price
    #idProducto
    #status
    #owner
    constructor({title,description,stock,price,owner}){
        this.#title = title,
        this.#description = description,
        this.#stock = stock,
        this.#price = price,
        this.#idProducto = crypto.id(),
        this.#status = stock>0?true:false,
        this.#owner = owner
    }

    dto(){
        return {
            title:this.#title,
            description:this.#description,
            stock:this.#stock,
            price:this.#price,
            idProducto:this.#idProducto,
            status:this.#status,
            owner:this.#owner
        }
    }
}