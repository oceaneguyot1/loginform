//Vérification de l'email
let email = document.getElementById('mailSU');

email.addEventListener('focusout',function(e){
    
    let emailValue = this.value;
    let alertEmail = document.getElementById('alertEmail');

    let regexMail = /^[a-zA-Z]{1}\S*(@)[a-zA-Z]{1,10}(.)[a-zA-Z]{2,5}/gm;

    //Si c'est true : retourne un tableau
    //Si c'est false : retourne null
    let verifEmail = regexMail.exec(emailValue);

    if(!verifEmail && emailValue.length !== 0){
        alertEmail.classList.remove('none');
        this.classList.add('errorShadow');
    } else {
        alertEmail.classList.add('none');
        this.classList.remove('errorShadow');
    }

})


document.getElementById('title__signup').addEventListener('click', function(e){
    this.classList.add('select');
    document.getElementById('title__login').classList.remove('select');
    signupForm.classList.remove('none');
    loginForm.classList.add('none');

})


document.getElementById('title__login').addEventListener('click', function(e){
    this.classList.add('select');
    document.getElementById('title__signup').classList.remove('select');
    loginForm.classList.remove('none');
    signupForm.classList.add('none');
})


pwdverifSU.addEventListener('focusout', function(e){
    let pwd = pwdSU.value;
    let pwdverif = this.value;

    if(pwd !== pwdverif){
        pwdSU.classList.add('errorShadow');

        this.classList.add('errorShadow');

        alertPwd.classList.remove('none')
    }

})


login__button.addEventListener('click',function(e){
    e.preventDefault();
    viewPopUp('login', 'typeMessage')
})
signup__button.addEventListener('click',function(e){
    e.preventDefault();
    viewPopUp('signup', 'typeMessage')
})

/**
 * Fonction pour choisir un message à afficher dans un popup
 * @param {*} choixMessage : Message texte que l'on veut afficher
 * @param {*} idMessage : element html où on veut insérer le message
 */
function viewPopUp(choixMessage, idMessage){
    let span = document.createElement('span');

    let message;

    switch (choixMessage){
        case 'login': 
            message = "Connexion";
            break;
        case 'signup':
            message = "Inscription";
            break;

    }

    let spanContent = document.createTextNode(message);

    span.appendChild(spanContent);

    //A BANIR !
    // typeMessage.innerHTML = '<div>Connexion</div>';

    document.getElementById(idMessage).appendChild(spanContent);
    
    popUp.classList.remove('none');
}

