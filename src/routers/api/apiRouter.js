import { Router } from "express";
import { usuariosRouter } from "./usuariosRouter.js";
import { sesionesRouter } from "./sesionesRouter.js";
import { productosRouter } from "./productosRouter.js";
import { carritosRouter } from "./carritosRouter.js";

export const apiRouter = Router()

apiRouter.use('/productos', productosRouter)

apiRouter.use('/usuarios', usuariosRouter)

apiRouter.use('/sesiones', sesionesRouter)

apiRouter.use('/carritos', carritosRouter)