# practica-integradora-4
Configure en primer lugar multer para que dependiendo el documento se guarde en: ./public/profiles o ./products o tambien en una carpeta general que es ./documents
Le añadi al modelo de usuario un: documents (para guardar los documentos) y una propiedad de ultima vez (creé 2 middlewares para esto)
Por ultimo añadi un middleware para que solo el usuario pueda cambiar de rol cuando tenga 3 documentos con los nombres de : identificacion, domicilio y cuenta
