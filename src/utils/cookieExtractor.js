export function cookieExtractor (req,res,next) {
    let token = null
    if(req.signedCookies['authToken']){
        token = req.signedCookies['authToken']
        return token
    }else console.log('No hay signed cookies')
}