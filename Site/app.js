const firebaseConfig = {
    apiKey: "AIzaSyBrmPLWhtmCPESO2aXs5vk3SOpnrDs-M0U",
    authDomain: "projeto2mibteste.firebaseapp.com",
    projectId: "projeto2mibteste",
    storageBucket: "projeto2mibteste.appspot.com",
    messagingSenderId: "362201604579",
    appId: "1:362201604579:web:b17cc8bef9e23de35140d6"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Usuário logado com sucesso
        const user = userCredential.user;
        console.log('Usuário logado:', user);
    })
    .catch((error) => {
        // Tratar erros de autenticação
        const errorMessage = error.message;
        console.error('Erro de autenticação:', errorMessage);
        });
    });