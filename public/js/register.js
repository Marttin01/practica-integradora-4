const formRegister = document.querySelector('#formRegister')

if(formRegister instanceof HTMLFormElement){
    formRegister.addEventListener('submit', async  evento =>  {
        evento.preventDefault()
        
        const input_first_name = document.querySelector('#input_first_name')
        const input_last_name = document.querySelector('#input_last_name')
        const input_age = document.querySelector('#input_age')
        const input_email = document.querySelector('#input_email')
        const input_password = document.querySelector('#input_password')

        if(
            input_first_name instanceof HTMLInputElement &&
            input_last_name instanceof HTMLInputElement &&
            input_age instanceof HTMLInputElement &&
            input_email instanceof HTMLInputElement &&
            input_password instanceof HTMLInputElement 
        ){

            const dataUser = {
                first_name: input_first_name.value,
                last_name: input_last_name.value,
                age: input_age.value,
                email: input_email.value,
                password: input_password.value
            } 

            const createUser = await fetch('/api/usuarios/register', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUser)
            })

            if(createUser.status === 201) {
                window.location.replace('/perfil')
            }

        }

    })
}