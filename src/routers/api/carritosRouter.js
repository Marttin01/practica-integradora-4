import { Router } from "express"
import { handlePost, handlePut } from "../../controllers/api/carritosController.js"

export const carritosRouter = Router()


carritosRouter.post('/:cid/purchase', handlePost)

carritosRouter.put('/addProduct', handlePut )