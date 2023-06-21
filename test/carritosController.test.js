
async function handleDelete (){

    const reqBody = {
        id:1,
    }

    const reqCredenciales = {
        nombre:"Martin",
        edad:22,
        mail:"martin@hotmail.com",
        id:"1mf"
    }

    const cartUser = {
        idCarrito:2023,
        productos: [
            {
                idProducto:1,
                cantidad:2
            }
        ]
    }

    const cartProduct = {
        idProducto:2,
        cantidad:2
    }

    //empieza la prueba

    let productoExiste = cartUser.productos.find((p)=> p.idProducto === reqBody.id)

    // console.log(productoExiste)

    //si el producto existe en el array productos se resta la cantidad en 1
    if(productoExiste){
        if(productoExiste.cantidad === 1){
            let indiceProducto = cartUser.productos.findIndex((p)=> p.idProducto === reqBody.id)
            cartUser.productos.splice(indiceProducto,1)
            console.log("Paso por el 1")
            console.log(cartUser)
            return
        }
        if(productoExiste.cantidad > 0){
            productoExiste.cantidad--
            console.log("Paso por el 0")
            //busco el indice del producto en cuestion y lo eliminamos
            let indiceProducto = cartUser.productos.findIndex((p)=> p.idProducto === reqBody.id)
            cartUser.productos.splice(indiceProducto,1)

            //pusheamos dentro del array vacio al productoExiste con la cantidad modificada
            cartUser.productos.push(productoExiste)
            console.log(cartUser)
        }
    }
}

handleDelete()