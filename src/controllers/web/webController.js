import { productosRepository } from "../../repositories/productosRepository.js"
import { usuarioRepository } from "../../repositories/usuariosRepository.js"

export async function usuariosController (req,res,next){

    const usuarios = await usuarioRepository.readMany()

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

export function perfilController (req,res,next) {

    const usuario = req.credenciales

    res.render('perfil', {
        pageTitle: `Perfil de ${usuario.first_name}`,
        welcome: `Bienvenido a tu perfil ${usuario.first_name}`,
        name:usuario.first_name,
        lastName:usuario.last_name,
        email:usuario.email,
        age:usuario.age,
        rol:usuario.rol,
        ifAdmin: usuario.rol === 'admin',
        cart:usuario.cart
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
    const usuario = req.credenciales
    // console.log(productos)

    res.render('productos', {
        pageTitle:'Productos',
        productos,
        hayProductos: productos.length > 0,
        usuario,
        ifAdmin: usuario.rol === 'admin',
        usuarioName: usuario.first_name
    })
}

export async function inicioController (req,res,next){

    res.render('inicio', {
        pageTitle:'Inicio'
    })
}