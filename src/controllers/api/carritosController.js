import { productosRepository } from "../../repositories/productosRepository.js"

export async function handlePost (req,res,next){
    
}

export async function handlePut (req,res,next){
    // console.log(req.body)

    const productoBuscado = await productosRepository.readById(req.body.id)
    console.log(productoBuscado)

    const productoStock = {
        ...productoBuscado,
        stock:productoBuscado.stock - 1
    }

    console.log(productoStock)
}