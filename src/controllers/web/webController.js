import { carritoRepository } from "../../repositories/carritoRepository.js"
import { productosRepository } from "../../repositories/productosRepository.js"
import { usuarioRepository } from "../../repositories/usuariosRepository.js"

export async function usuariosController (req,res,next){

    const usuarios = await usuarioRepository.readMany()
    const usuario = req.credenciales
    
    const carritoUsuario = await carritoRepository.readByCartId(usuario.cart)
    // console.log(carritoUsuario)

    // console.log(usuario)

    res.render('usuarios', {
        pageTitle:'Usuarios',
        hayUsuarios: usuarios.length > 0,
        usuarios
    })
}

export function registroController (req,res,next){
    res.render('register', {
        pageTitle:'Registro'
    })
}

export function loginController (req,res,next){
    res.render('login', {
        pageTitle:'Login'
    })
}

export async function perfilController (req,res,next) {

    const usuario = req.credenciales
    console.log(usuario.cart)

    // usuario.cart.productos.forEach(producto => {
    // })

    res.render('perfil', {
        pageTitle: `Perfil de ${usuario.first_name}`,
        welcome: `Bienvenido a tu perfil ${usuario.first_name}`,
        name:usuario.first_name,
        lastName:usuario.last_name,
        email:usuario.email,
        age:usuario.age,
        rol:usuario.rol,
        ifAdmin: usuario.rol === 'admin',
        cart:usuario.cart.idCarrito,
        hayProductos:usuario.cart.productos.length > 0,
        productos:usuario.cart.productos
    })
}

export function currentWebController (req,res,next){

    const sesion = req.credenciales

    res.render('current', {
        pageTitle: 'Sesion actual',
        current: `Sesion actual de: ${sesion.first_name}`,
        email:sesion.email,
        age:sesion.age,
        rol:`Usted es: ${sesion.rol}`
    })
}

export async function productosController (req,res,next){

    const productos = await productosRepository.readMany()
    const emailUser = req.credenciales.email
    const user = await usuarioRepository.readByEmail(emailUser)

    
    const cart = user.cart
    // console.log(cart.productos)

    res.render('productos', {
        pageTitle:'Productos',
        productos,
        hayProductos: productos.length > 0,
        user,
        ifAdmin: user.rol === 'admin',
        usuarioName: user.first_name,
        cart,
        cartProductos:cart.productos
    })
}

export async function inicioController (req,res,next){

    res.render('inicio', {
        pageTitle:'Inicio'
    })
}