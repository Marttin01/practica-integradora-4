import { crypto } from "../utils/criptografia.js"

export class Usuario {
    #first_name
    #last_name
    #age
    #email
    #password
    #rol
    #cart
    #last_connection
    #documents
    #id
    constructor({first_name,last_name,age,email, password,rol}){
        this.#first_name = first_name,
        this.#last_name = last_name,
        this.#age = age,
        this.#email = email,
        this.#password = crypto.hashear(password),
        this.#rol = rol,
        this.#cart = crypto.id(),
        this.#last_connection = new Date().toLocaleString(),
        this.#documents = [],
        this.#id = crypto.id()
    }

    dto() {
        return {
            first_name:this.#first_name,
            last_name:this.#last_name,
            age:this.#age,
            email:this.#email,
            password:this.#password,
            rol:this.#rol,
            cart:this.#cart,
            last_connection:this.#last_connection,
            documents:this.#documents,
            id:this.#id
        }
    }
}