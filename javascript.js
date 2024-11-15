const passwordInputField = document.querySelector('#password')
const passwordConfirmInputField = document.querySelector('#password-confirm')
const passwordAlert = document.querySelector('#password-alert')
function checkPasswordMatch() {
    let passwordFieldOne = passwordInputField.value
    let passwordFieldTwo = passwordConfirmInputField.value

    if(passwordFieldOne !== passwordFieldTwo) {
        passwordAlert.classList.add('buzz-animation')
    } else if(passwordFieldOne === passwordFieldTwo) {
        passwordAlert.classList.remove('buzz-animation')
    }
    console.log(passwordFieldOne, passwordFieldTwo)
}

passwordConfirmInputField.addEventListener('input', ()=> {
    checkPasswordMatch()
})


checkPasswordMatch() 