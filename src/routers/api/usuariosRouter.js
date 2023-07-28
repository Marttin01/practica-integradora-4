import { Router } from "express"
import { handleDelete, handlePost, handlePut, handleRestablecer, handleRestablecer2 } from "../../controllers/api/usuariosController.js"
import { rolAuth } from "../../middlewares/rolAuth.js"
import { upload } from "../../utils/multer.js"
import { handleFileMulter, handleMulter } from "../../controllers/api/multer/multerController.js"
import { tieneDoc } from "../../middlewares/premium/docPremium.js"

export const usuariosRouter = Router()

usuariosRouter.post('/register', rolAuth ,handlePost)

usuariosRouter.delete('/delete', handleDelete )

usuariosRouter.put('/premium', tieneDoc ,handlePut)

usuariosRouter.post('/restablecer', handleRestablecer)

usuariosRouter.put('/restablecer/nueva', handleRestablecer2)

usuariosRouter.post('/:uid/documentos', upload.single('document'), handleFileMulter, handleMulter)