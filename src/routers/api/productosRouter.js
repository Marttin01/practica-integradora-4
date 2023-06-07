import { Router } from "express";
import { handleDelete, handlePost } from "../../controllers/api/productosController.js";

export const productosRouter = Router()

productosRouter.post('/post', handlePost)

productosRouter.get('/')

productosRouter.put('/')

productosRouter.delete('/delete', handleDelete)