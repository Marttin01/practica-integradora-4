const formRes = document.querySelector('#formRes')
// console.log(formRes)

if(formRes instanceof HTMLFormElement){
    formRes.addEventListener('submit', async () => {
        const input_email = document.querySelector('#input_email')

        if(input_email instanceof HTMLInputElement){

            const data = {
                email:input_email.value
            }
    
            // console.log(data)
            await fetch('/api/usuarios/restablecer', {
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })


        }

    })
}