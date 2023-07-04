import { crypto } from "../../utils/criptografia.js"

export async function restablecer (req,res,next) {
    


    res.render('restablecer', {
        pageTitle:'Restablecer'
    })
}

export async function restablecer2 (req,res,next){

    // const token = req.signedCookies['recupToken']
    // const data = crypto.decodificarToken(token)

    // console.log(data)

    res.render('restablecer2', {
        pageTitle:'Nueva contraseña'
    })
}