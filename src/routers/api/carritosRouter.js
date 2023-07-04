import { Router } from "express"
import { handleDelete, handlePost, handlePut } from "../../controllers/api/carritosController.js"
import { rolDelete } from "../../middlewares/rolDelete.js"

export const carritosRouter = Router()


carritosRouter.post('/:cid/purchase', handlePost)

carritosRouter.put('/addProduct', handlePut )

carritosRouter.delete('/deleteProduct',handleDelete)