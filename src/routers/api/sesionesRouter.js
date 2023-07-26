import { Router } from "express";
import { autenticacionJwt, loginUserPass } from "../../middlewares/passport/passport.js"
import { currentController, loginControllerApi, logoutControllerApi } from "../../controllers/api/sesionesController.js"
import { loginLastConnection } from "../../middlewares/login/lastConnection.js";
import { logoutLastConnection } from "../../middlewares/login/lastConnectionLogout.js";

export const sesionesRouter = Router()

sesionesRouter.post('/login', loginUserPass, loginLastConnection  ,loginControllerApi)

sesionesRouter.get('/current', autenticacionJwt, currentController)

sesionesRouter.delete('/logout', logoutLastConnection ,logoutControllerApi)