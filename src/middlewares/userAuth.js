export function usuariosAuth (req,res,next) {
    if(req.credenciales.rol === 'admin') {
        next()
    }else {
        res.redirect('/perfil')
        next()
    }
}