const formTag = document.querySelector('form')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#pass')
const messageError = document.querySelector('.message')
const messageTrue = document.querySelector('.message2')
const button = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')

formTag.addEventListener('submit', () => {
    if (usernameInput.value.length < 6 || passwordInput.value.length < 9) {
        messageError.classList.remove('hidden')
        (() => {
            messageError.classList.add('hidden')
            usernameInput.value = ''
            passwordInput.value = ''
        })

    } else {
        messageTrue.classList.remove('hidden')
        (() => {
            messageTrue.classList.add('hidden')
            usernameInput.value = ''
            passwordInput.value = ''
        })  
    }
})

button.addEventListener('click' , () => {

    messageError.remove('message')
})


button2.addEventListener('click' , () => {
    messageTrue.remove('message2')
})