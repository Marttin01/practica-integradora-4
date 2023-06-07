import { Cart } from "../../models/Cart.js"
import { Usuario } from "../../models/User.js"
import { carritoRepository } from "../../repositories/carritoRepository.js"
import { usuarioRepository } from "../../repositories/usuariosRepository.js"
import { crypto } from "../../utils/criptografia.js"

export async function handlePost (req,res,next) {
    try {
        const usuario = new Usuario(req.body) 
        const creado  = await usuarioRepository.create(usuario.dto())

        const cart = new Cart(creado.cart)
        const carritoCreado = await carritoRepository.create(cart.dto())

        const token = crypto.generarToken(creado)
        
        res.cookie('authToken', token, {httpOnly:true, signed:true,maxAge: 1000*60*60}) 

        res.sendStatus(201)

    } catch (error) {
        res.status(401)
        console.log(error)
    }
}

export async function handleDelete (req,res,next){
    try {

        const usuario = await usuarioRepository.readByEmail(req.body.email)

        await usuarioRepository.deleteOne(usuario)

        const carrito = await carritoRepository.readByCartId(usuario.cart)

        await carritoRepository.deleteOne(carrito)

        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}