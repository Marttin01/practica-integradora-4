export async function setOwner (req,res,next){
    try {
        // console.log(req.credenciales)
        req.body.owner = req.credenciales.email
        next()    
    } catch (error) {
        next(error)
    }  
}