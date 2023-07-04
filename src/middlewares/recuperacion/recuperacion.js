export async function recuperar(req,res,next){
    if(req.signedCookies['recupToken'])res.redirect('/login/restablecer/nueva')
    else next()
}

export async function recuperar2(req,res,next){
    if(!req.signedCookies['recupToken'])res.redirect('/login/restablecer')
    else next()
}