import { Router } from "express";
import { handleDelete, handlePost } from "../../controllers/api/productosController.js";
import { setOwner } from "../../middlewares/owner.js";
import { rolDelete } from "../../middlewares/rolDelete.js";

export const productosRouter = Router()

productosRouter.post('/post', setOwner ,handlePost)

productosRouter.delete('/delete', rolDelete ,handleDelete)