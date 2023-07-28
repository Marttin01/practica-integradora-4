import { usuarioRepository } from "../../repositories/usuariosRepository.js"

export async function tieneDoc (req,res,next){
    try {
        if(req.credenciales.rol === 'premium'){
            next()
        }else{
            const usuario = await usuarioRepository.readByEmail(req.credenciales.email)
            
            const identificacionDoc = usuario.documents.find((d) => d.name.includes('identificacion'))
            const domicilioDoc = usuario.documents.find((d) => d.name.includes('domicilio'))
            const cuentaDoc = usuario.documents.find((d) => d.name.includes('cuenta'))
    
            if(identificacionDoc && domicilioDoc && cuentaDoc){
                next()
            }else throw new Error('No ha terminado de cargar la documentacion')
        }
        // next()
    } catch (error) {
        next(error)
    }
}