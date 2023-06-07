import { Router } from "express";
import { currentWebController, inicioController, loginController, perfilController, productosController, registroController, usuariosController } from "../../controllers/web/webController.js";
import { usuariosAuth } from "../../middlewares/userAuth.js"
import { autenticadosWeb } from "../../middlewares/auth.js";

export const webRouter = Router()

webRouter.get('/usuarios', autenticadosWeb ,usuariosAuth ,usuariosController)

webRouter.get('/productos',autenticadosWeb,productosController)

webRouter.get('/register', registroController)

webRouter.get('/login', loginController )

webRouter.get('/perfil', autenticadosWeb ,perfilController )

webRouter.get('/current',autenticadosWeb, currentWebController)

webRouter.get('/',  inicioController)