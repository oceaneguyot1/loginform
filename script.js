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