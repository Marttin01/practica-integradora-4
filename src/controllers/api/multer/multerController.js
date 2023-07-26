import { usuarioRepository } from "../../../repositories/usuariosRepository.js"

export async function handleMulter (req,res,next){
    try {
        res.json(req.file)
    } catch (error) {
        next(error)
    }
}

export async function handleFileMulter (req,res,next){
    try {
        const usuario = await usuarioRepository.readOne({id:req.params.uid})
        // ({id:req.params.mid})
        // console.log(mascota)
        const usuarioFile = {
            name:req.file.filename,
            path:req.file.path
        }

        await usuario.documents.push(usuarioFile)
        
        const nuevoUsuario = usuario
        // console.log(nuevaMascota)
        await usuarioRepository.updateOne({id:req.params.uid},nuevoUsuario)
        next()
    } catch (error) {
        next(error)
    }
}