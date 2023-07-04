import { createTransport } from "nodemailer"
import { Cart } from "../../models/Cart.js"
import { Usuario } from "../../models/User.js"
import { carritoRepository } from "../../repositories/carritoRepository.js"
import { usuarioRepository } from "../../repositories/usuariosRepository.js"
import { crypto } from "../../utils/criptografia.js"
import { SERVER_EMAIL, SERVER_EMAIL_PASSWORD } from "../../server.config/email.config.js"

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

        const carrito = await carritoRepository.readByCartId(usuario.cart?usuario.cart:usuario.cart.idCarrito)

        await carritoRepository.deleteOne(carrito)

        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

export async function handlePut (req,res,next){
    try {
        // console.log(req.credenciales)
        const usuario = await usuarioRepository.readByEmail(req.credenciales.email)

        const nuevoUser = {
            ...usuario,
            rol:usuario.rol === 'premium'?'user':'premium'
        }

        await usuarioRepository.updateOne(usuario,nuevoUser)

        // console.log(req.credenciales)
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}

export async function handleRestablecer (req,res,next){
    try {
        // console.log(req.body)
        const usuario = await usuarioRepository.readByEmail(req.body.email)
        // console.log(usuario)

        const token = crypto.generarToken(usuario)
        // console.log(token)
        
        res.cookie('recupToken', token, {httpOnly:true, signed:true, maxAge:1000*60*3}).send({status:'correct'})

        const clienteNodemailer = createTransport({
            host:'smtp.ethereal.email',
            port: 587,
            auth: {
                user: SERVER_EMAIL,
                pass: SERVER_EMAIL_PASSWORD
            }
        })

        const testEmail = SERVER_EMAIL

        const mailOptions = {
            from:testEmail,
            to: req.body.email,
            subject: 'Recuperar contraseña',
            html:`<h3>${usuario.first_name} ${usuario.last_name} restablezca su contraseña<h3><a href="http://localhost:8080/login/restablecer/nueva">Restablezca su contraseña</a>`
        }

        
        const info = await clienteNodemailer.sendMail(mailOptions)
        // console.log(info)

    } catch (error) {
        console.log(error)
    }
}

export async function handleRestablecer2 (req,res,next){
    try {
        const token = req.signedCookies['recupToken']
        const dataUser = crypto.decodificarToken(token)
        
        const usuario = await usuarioRepository.readByEmail(dataUser.email)
        res.clearCookie('recupToken')

        const newPassword = crypto.hashear(req.body.password)
        const newUsuario = {
            ...usuario,
            password:newPassword
        }

        await usuarioRepository.updateOne(usuario,newUsuario)

        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}