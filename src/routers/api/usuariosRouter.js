import { Router } from "express"
import { handleDelete, handlePost } from "../../controllers/api/usuariosController.js"
import { rolAuth } from "../../middlewares/rolAuth.js"

export const usuariosRouter = Router()

usuariosRouter.post('/register', rolAuth ,handlePost)

usuariosRouter.delete('/delete', handleDelete )