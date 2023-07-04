import { usuarioRepository } from "../repositories/usuariosRepository.js"
import { crypto } from "../utils/criptografia.js"

export async function actualizarCredenciales (req,res,next){
    try {
        if(!req.signedCookies['authToken']){
            next()
        }else{
            const token = req.signedCookies['authToken']

            const dataUser = crypto.decodificarToken(token)
            
            const usuario = await usuarioRepository.readByEmail(dataUser.email)
            res.clearCookie('authToken')

            const nuevoToken = crypto.generarToken(usuario)
            res.cookie('authToken', nuevoToken, {httpOnly:true, signed:true, maxAge: 1000*60*60})
            
            next()
        }

    } catch (error) {
        next(error)
    }
}