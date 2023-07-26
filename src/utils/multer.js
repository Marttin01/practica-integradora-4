import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const document = req.body.document 
        let path

        switch (document) {
            case 'profile':
                path = './public/profiles'
                break;
            case 'mascota':
                path = './public/mascota'
                break;
            default:
                path = './public/documents'
                break;
        }

        cb(null, path)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`)
    }
})

export const upload = multer({ storage })

