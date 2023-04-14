const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try{

        const response = await fetch('http://localhost:3333/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        });

        const data = await response.json();

        //verifica se o login foi feito com sucesso

        console.log(data.token);
        if(data.token) {
            localStorage.setItem('jwt', data.token);

            //redireciona para o dashboard caso o login seja feito
            //com sucesso.
            window.location.href = 'file:///C:/Users/alunonoite/Documents/Workspace/FULL%20STACK/FRONT/src/pages/dashboard.html';

        } else {
            //Exibe um erro
            alert(data.message);
        }

    }catch (error){
        console.log(error);
        alert('Ocorreu um erro nessa requisição.')

    }
})