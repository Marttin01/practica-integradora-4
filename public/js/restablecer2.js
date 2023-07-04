const formPassword = document.querySelector('#formPassword')

if(formPassword instanceof HTMLFormElement){
    formPassword.addEventListener('submit', async () => {
        const input_password = document.querySelector('#input_password')

        const data = {
            password:input_password.value
        }

        const passwordFetch = await fetch('/api/usuarios/restablecer/nueva', {
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        
        if(passwordFetch.status === 201)window.location.replace('http://localhost:8080/login')

    })
}