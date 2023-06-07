const formProductos = document.querySelector('#formProductos')

if(formProductos instanceof HTMLFormElement){
    formProductos.addEventListener('submit', async evento => {
        // evento.preventDefault()
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

// const formProducto = document.querySelector('#formProducto')

// if(formProducto instanceof HTMLFormElement){
//     formProducto.addEventListener('submit', async evento => {

//         const productId = document.querySelector('#productId')

//         if(productId instanceof HTMLLIElement){

//            console.log(productId.value)
//         }
//     })
// }