var currentUser;

function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('passoword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(use=>{
        console.log('Usuário', user);
        alert('Usuario criado e feito o login')
    }).catch(err =>{
        console.log('erro', err);
    });    
}

function loginEmail(){
    var email = document.getElementById('email').value;
    var passoword = document.getElementById('password').value;
    firebase.auth().signInEmailAndPassword(email, passoword).then(()=>{
        alert('Usuário logado!')
    }).catch(err =>{
        console.error('Error', err)
    });
}

currentUser = firebase.auth().currentUser
function deleteUser(){
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuário deletado');
        })
    }
}