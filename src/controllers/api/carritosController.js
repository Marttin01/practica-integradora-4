import { carritoRepository } from "../../repositories/carritoRepository.js"
import { productosRepository } from "../../repositories/productosRepository.js"
import { usuarioRepository } from "../../repositories/usuariosRepository.js"
import _ from 'lodash'

export async function handlePost (req,res,next){
    
}

export async function handlePut (req,res,next){
    const idProducto = req.body.id
    const carritoUser = req.credenciales.cart

    // console.log(carritoUser)
    const carritoBuscado = await carritoRepository.readByCartId(carritoUser)

    let productoExiste = carritoBuscado.productos.find((p)=> p.idProduct === idProducto)


    let productoCarrito = {
        idProduct:idProducto,
        cantidad:productoExiste?productoExiste.cantidad+1:1
    }

    if(productoExiste){
        productoExiste = productoCarrito

        let indiceProducto = carritoBuscado.productos.findIndex((p) => p.idProduct === idProducto)

        const newProduct = carritoBuscado.productos.splice(indiceProducto,1) 

        const nuevoCarrito = {
            ...carritoBuscado,
            productos:carritoBuscado.productos.concat(productoExiste)  
        }

        await carritoRepository.updateMany(carritoBuscado,nuevoCarrito)
    }else{
        const nuevoCarrito = {
            ...carritoBuscado,
            productos:carritoBuscado.productos.concat(productoCarrito)  
        }

        const carritoActualizado = await carritoRepository.updateOne(carritoBuscado, nuevoCarrito)

    } 

    const carritoBuscado2 = await carritoRepository.readByCartId(carritoUser)
    console.log(carritoBuscado2)
    
    const user = await usuarioRepository.readByEmail(req.credenciales.email)
    // console.log(user)
    // let carritoJSON = JSON.parse(JSON.stringify(carritoBuscado2))
    // console.log(carritoJSON)

    const newUser = {
        ...user,
        cart:carritoBuscado2
    }

    console.log(newUser)

    await usuarioRepository.updateOne({email:req.credenciales.email}, newUser)
    // const productoBuscado = await productosRepository.readById(idProducto)
    // console.log(productoBuscado)

    // const productoStock = {
    //     ...productoBuscado,
    //     stock:productoBuscado.stock - 1
    // }

    // console.log(productoStock)


}