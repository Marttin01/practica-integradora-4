import { crypto } from "../utils/criptografia.js"

export class Usuario {
    #first_name
    #last_name
    #age
    #email
    #password
    #rol
    #cart
    constructor({first_name,last_name,age,email, password,rol}){
        this.#first_name = first_name,
        this.#last_name = last_name,
        this.#age = age,
        this.#email = email,
        this.#password = crypto.hashear(password),
        this.#rol = rol,
        this.#cart = crypto.id()
    }

    dto() {
        return {
            first_name:this.#first_name,
            last_name:this.#last_name,
            age:this.#age,
            email:this.#email,
            password:this.#password,
            rol:this.#rol,
            cart:this.#cart
        }
    }
}