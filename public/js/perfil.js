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