const jwt = localStorage.getItem('jwt');
console.log(jwt);
if(!jwt){
    window.location.href = 'file:///C:/Users/alunonoite/Documents/Workspace/FULL%20STACK/FRONT/src/pages/index.html'
}