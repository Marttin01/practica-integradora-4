const formDelete = document.querySelector('#formDelete')

if(formDelete instanceof HTMLFormElement){

    formDelete.addEventListener('submit', async evento => {

        const input_email = document.querySelector('#input_email')

        if(input_email instanceof HTMLInputElement){

            const dataEmail = {
                email:input_email.value
            }

            const deleteFetch = await fetch('/api/usuarios/delete', {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(dataEmail)
            })

            if(deleteFetch.status === 201) window.location.replace('/usuarios')
        }
    })
}