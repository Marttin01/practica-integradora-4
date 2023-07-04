import { Router } from "express";
import { currentWebController, inicioController, loginController, perfilController, productosController, registroController, usuariosController } from "../../controllers/web/webController.js";
import { usuariosAuth } from "../../middlewares/userAuth.js"
import { autenticadosWeb } from "../../middlewares/auth.js";
import { restablecer, restablecer2 } from "../../controllers/web/restablecerController.js";
import {recuperar2 } from "../../middlewares/recuperacion/recuperacion.js";

export const webRouter = Router()

webRouter.get('/usuarios', autenticadosWeb ,usuariosAuth ,usuariosController)

webRouter.get('/productos',autenticadosWeb,productosController)

webRouter.get('/register', registroController)

webRouter.get('/login', loginController )

webRouter.get('/perfil', autenticadosWeb ,perfilController )

webRouter.get('/current',autenticadosWeb, currentWebController)

webRouter.get('/',  inicioController)

webRouter.get('/login/restablecer' ,restablecer)

webRouter.get('/login/restablecer/nueva', recuperar2, restablecer2 )