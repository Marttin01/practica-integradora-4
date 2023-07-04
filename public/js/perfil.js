const formLogout = document.querySelector('#formLogout') 

if(formLogout instanceof HTMLFormElement){
    formLogout.addEventListener('submit', async event =>{
        // event.preventDefault()

        const logoutButton = document.querySelector('#logoutButton')

        if(logoutButton instanceof HTMLButtonElement){
            const logoutFetch = await fetch('/api/sesiones/logout', {
                method:'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            if(logoutFetch.status === 201){
                window.location.replace('/login')
            }

        }
        
    })
}

const formRol = document.querySelector('#formRol')

if(formRol instanceof HTMLFormElement){
    formRol.addEventListener('submit', async () => {
        const rolButton = document.querySelector('#rolButton')

        if(rolButton instanceof HTMLButtonElement){
            const rolFetch = await fetch('/api/usuarios/premium', {
                method:'PUT',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if(rolFetch.status === 201)window.location.replace('/perfil')
        }
    })
}