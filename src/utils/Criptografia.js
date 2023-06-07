import bcrypt from 'bcrypt'
import { randomUUID } from 'node:crypto'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../server.config/auth.config.js'

class Criptografia {

    hashear(palabra){
        return bcrypt.hashSync(palabra, bcrypt.genSaltSync(10))
    }

    id(){
        return randomUUID()
    }

    validarIgualdad(recibida,almacenada){
        return bcrypt.compareSync(recibida,almacenada)
    }

    generarToken(data){
        return jwt.sign(data, JWT_SECRET, { expiresIn:'1h' })
    }

    decodificarToken(token){
        try {
            return jwt.verify(token, JWT_SECRET)
        } catch (error) {
            throw new Error(`Error de autenticacion ${error}`)
        }
    }
}

export const crypto = new Criptografia()

 