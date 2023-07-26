import { usuarioRepository } from "../../repositories/usuariosRepository.js"

export async function loginLastConnection (req,res,next){
    try {
        const nuevoUser = {
            ...req.user,
            last_connection: new Date().toLocaleString()
        }

        const usuario = await usuarioRepository.readByEmail(req.user.email)
        
        
        const nuevoUsuario = {
            ...usuario,
            last_connection: new Date().toLocaleString()
        }

        await usuarioRepository.updateOne({ email:usuario.email },nuevoUsuario)

        req.user = nuevoUser
        next()
    } catch (error) {
        next(error)
    }
}