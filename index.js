var Email = document.querySelector('input')
var Button = document.querySelector('.input-buton')
var ErrorMsg = document.querySelector('form small')

Button.addEventListener('click', function(e){
 validation();
 e.preventDefault();

})

function emailValidation(mail){
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
}
function validation(){
    if (Email.value.trim()=== '' || !emailValidation(Email.value.trim())){
        ErrorMsg.innerHTML = 'Please, enter a valid email address'
    }
     else{
    ErrorMsg.innerHTML = ''
    }
}