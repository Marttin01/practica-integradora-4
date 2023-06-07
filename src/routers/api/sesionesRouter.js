import { Router } from "express";
import { autenticacionJwt, loginUserPass } from "../../middlewares/passport/passport.js"
import { currentController, loginControllerApi, logoutControllerApi } from "../../controllers/api/sesionesController.js"

export const sesionesRouter = Router()

sesionesRouter.post('/login', loginUserPass, loginControllerApi)

sesionesRouter.get('/current', autenticacionJwt, currentController)

sesionesRouter.delete('/logout', logoutControllerApi)