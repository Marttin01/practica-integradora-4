import { Ticket } from "../src/models/Ticket.js"

async function handlePost () {
    const reqBody = {}

    const reqCredenciales = {
        _id:'64829a8283dd23a8857bd1d5',
        first_name:'rob',
        last_name:'stark',
        age:35,
        email:'rob@hotmail.com',
        password:'$2b$10$Yczakjsaksdlakjsdka323kj',
        rol:'user',
        cart: {
            _id:'652392923',
            idCarrito:'18eb3f2e-c4b8-4954-9d95-51ee4c47a894',
            productos: [
                {
                    idProduct:'847be4e2-3d23-4fde-aa86-b87d4b86dd13',
                    cantidad:4
                },
                {
                    idProduct:'d777ac20-29c0-45f6-a2b9-d93256dbf89b',
                    cantidad:2
                }
            ]
        }
    }

    const cartUser = {
        _id:'652392923',
            idCarrito:'18eb3f2e-c4b8-4954-9d95-51ee4c47a894',
            productos: [
                {
                    idProduct:'847be4e2-3d23-4fde-aa86-b87d4b86dd13',
                    cantidad:4
                },
                {
                    idProduct:'d777ac20-29c0-45f6-a2b9-d93256dbf89b',
                    cantidad:9
                }
            ]
    }

    const productosRepository = [
        {
            "_id": {
              "$oid": "6481fd75f3b3c51ea31728aa"
            },
            "title": "Powerade Mango x6",
            "description": "Gran sabor",
            "stock": 5,
            "price": 2200,
            "idProducto": "847be4e2-3d23-4fde-aa86-b87d4b86dd13",
            "status": true
        },
        {
            "_id": {
              "$oid": "64813eb37e7350fabd927b2d"
            },
            "title": "Aguas SmartWater x6",
            "description": "Refrescante",
            "stock": 10,
            "price": 1000,
            "idProducto": "d777ac20-29c0-45f6-a2b9-d93256dbf89b",
            "status": true
        },
        {
            "_id": {
              "$oid": "647ffa356cd511442ae5c1f9"
            },
            "title": "Powerade Mountain Blast x6",
            "description": "Frescura y recuperacion",
            "stock": 20,
            "price": 1400,
            "idProducto": "849e176c-d162-4368-9fc4-6f1530ec34dc",
            "status": true
        },
        {
            "_id": {
              "$oid": "647ff9e46cd511442ae5c1f6"
            },
            "title": "Powerade Frutos Rojos x6",
            "description": "Gran sabor y frescura tropical",
            "stock": 10,
            "price": 1800,
            "idProducto": "1c0ed549-0ef4-4db1-8bcd-8d794c6f5d38",
            "status": true
        },
        {
            "_id": {
              "$oid": "647ff9b96cd511442ae5c1f2"
            },
            "title": "Powerade Manzana x6",
            "description": "Gran sabor a manzana ",
            "stock": 15,
            "price": 1500,
            "idProducto": "0af054ed-d7b8-468f-8d03-86701120e9a5",
            "status": true
        }
    ]

    const email = reqCredenciales.email
    const carrito = cartUser
    const valores = []

     carrito.productos.forEach(async(producto) => {
        const encontrado =  productosRepository.find((p) => p.idProducto === producto.idProduct )
        if(encontrado.stock > producto.cantidad){
            console.log('El stock del producto es mayor que el producto del carrito')
            const valor = encontrado.price * producto.cantidad
            // console.log(valor)
            valores.push(valor)
            //bajar la cantidad de stock del repositorio de productos
            
        }else{
            console.log('El stock del producto es menor o igual que el producto del carrito ')
        }
    })
    console.log(valores)
    const total = valores.reduce((first,second) => first + second,0)
    console.log(total)

    const nuevoTicket = {
        amount:total,
        purcharser:email
    }

    const ticket = new Ticket(nuevoTicket)
    console.log(ticket.dto())





    




}

handlePost()