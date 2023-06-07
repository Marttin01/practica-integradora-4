import { crypto } from "../../utils/criptografia.js";

export async function loginControllerApi (req,res,next){
    try {
        
        const token = crypto.generarToken(req.user)

        res.cookie('authToken', token, {httpOnly:true, signed:true, maxAge: 1000*60*60})

        res.sendStatus(201)
    } catch (error) {
        // res.status(401)
        next(error)
    }
}

export async function logoutControllerApi (req,res,next){
    res.clearCookie('authToken').sendStatus(201)
}

export async function currentController (req,res,next) {
    res.json(req.credenciales)
}