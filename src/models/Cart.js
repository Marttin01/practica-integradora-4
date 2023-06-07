
export class Cart{
    #idCarrito
    constructor(idCarrito){
        this.#idCarrito = idCarrito
    }

    dto(){
        return{
            idCarrito:this.#idCarrito
        }
    }
}