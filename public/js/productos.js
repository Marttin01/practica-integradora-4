const formProductos = document.querySelector('#formProducto')

if(formProductos instanceof HTMLFormElement){
    formProductos.addEventListener('submit', async evento => {
        evento.preventDefault()
        const input_title = document.querySelector('#input_title')
        const input_description = document.querySelector('#input_description')
        const input_stock = document.querySelector('#input_stock')
        const input_price = document.querySelector('#input_price')

        if( input_title instanceof HTMLInputElement &&
            input_description instanceof HTMLInputElement &&
            input_stock instanceof HTMLInputElement &&
            input_price instanceof HTMLInputElement
        ){

            const dataProduct = {
                title:input_title.value,
                description:input_description.value,
                stock:input_stock.value,
                price:input_price.value
            }

            const postFetch = await fetch('/api/productos/post', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(dataProduct)
            })

            if(postFetch.status === 201) window.location.replace('/productos')

        }
    })
}

const deleteForm = document.querySelector('#deleteForm')

if(deleteForm instanceof HTMLFormElement){
    deleteForm.addEventListener('submit', async evento => {
        
        const input_delete = document.querySelector('#input_delete')

        if(input_delete instanceof HTMLInputElement){

            const dataId = {
                id:input_delete.value
            }

            const deleteFetch = await fetch('api/productos/delete', {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(dataId)
            })

            if(deleteFetch.status === 201){
                window.location.replace('/productos')
            }
        }
    })
}
// console.log(stringFormProducto.substring(194,230))

// const stringFormProducto = form.outerHTML


const formProducto = document.querySelectorAll('#formProducto')


formProducto.forEach(function(formulario) {
    formulario.addEventListener('submit', async function(evento) {
        evento.preventDefault()
  

        const liEspecifico = formulario.querySelector('#listId')

        if(liEspecifico){
            const contenidoLi = liEspecifico.textContent
            const idContenido = contenidoLi.substring(5,41)

            const dataContenido = {
                id:idContenido
            }            

            const fetchDataContenido = await fetch('/api/carritos/addProduct', {
                method:'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(dataContenido)
            })
            // console.log(dataContenido)
            if(fetchDataContenido.status === 201) window.location.replace('/productos')
        }

    })
})

const formEliminado = document.querySelectorAll('#formEliminar')

formEliminado.forEach(function(formulario) {
    formulario.addEventListener('submit', async function(evento) {
        evento.preventDefault()

        const liEspecifico = formulario.querySelector('#lista')
        const cantidadLi = formulario.querySelector('#cantidad')

        if(liEspecifico && cantidadLi){
            const contenidoLi = liEspecifico.textContent
            const idContenido = contenidoLi.substring(17,53)

            const cantidad = cantidadLi.textContent
            const cantContenido = cantidad.substring(10,20)

            const dataContenido = {
                id:idContenido,
                cantidad:parseInt(cantContenido)
            }


            const fetchDataContenido = await fetch('api/carritos/deleteProduct', {
                method:'DELETE',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(dataContenido)
            })

            console.log(dataContenido)
        }
    })
})




  
  //   const stringFormulario = formulario.outerHTML
  //   const idFormulario = stringFormulario.substring(194,230)       




















// const formProducto = document.querySelectorAll('#formProducto')


// if(formProducto instanceof HTMLFormElement){
//     formProducto.forEach(function(form){
//         form.addEventListener('submit', function(evento){
//             evento.preventDefault()
    
//             // const formData = new FormData(formProducto)
//             // const idProducto = stringFormProducto.substring(194,230)
//             // const idProducto = formData.get('idProducto')
    
//             console.log(form)
    
    
//         })

//     })
    
// }





















