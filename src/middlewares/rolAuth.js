export function rolAuth (req,res,next){
    if(req.body.email.includes('admin.com')){
        req.body.rol = 'admin'
        next()
    }else {
        req.body.rol = 'user'
        next()
    }
}