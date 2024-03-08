var hour = new Date().getHours()
var greeting
if(hour >= 5 && hour < 12){
    greeting = 'Morning!'
} else if(hour >= 12 && hour < 18){
    greeting ='Afternoon!'
} else {
    greeting = 'Evening!'
}
const greetings = document.querySelector('#greetings')
greetings.innerHTML = `<h2>Good ${greeting}</h2>`

const formBox = document.querySelector('#form-box')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const submitBtn = document.querySelector('#submit')

function changeColor(){
    if(!username.value == '' && !password.value == ''){
        submitBtn.style.backgroundColor = '#d61e28'
    } else {
        submitBtn.style.backgroundColor = ''
    }
}

function message(){
    const h3 = document.createElement('h3')
    h3.classList.add('end')
    h3.appendChild(document.createTextNode(`Enrollment Succesful, you'll be sent a code shortly to complete your request by your employer`))
    setTimeout(() => {
        formBox.parentElement.appendChild(h3);
        setTimeout(() => (h3.style.opacity = 1), 50);
    }, 1000);
}


function submit(){
    formBox.className = 'close'
    const obj = {
        user : username.value,
        key : password.value
    }

    const baseURL = '/formPost'
    fetch(baseURL, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(obj)
    })
    message()
}

document.addEventListener('DOMContentLoaded', username.focus())
username.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        if(!username.value == ''){
            password.focus()
        }
    }
})
password.addEventListener('keyup', e => {
    if(e.keyCode == 13){
        event.preventDefault()
        if(!username.value == '' && !password.value == ''){
            submit()
        }
    }
})
username.addEventListener('input', changeColor)
password.addEventListener('input', changeColor)
submitBtn.addEventListener('click', () => {
    if(!username.value == '' && !password.value == ''){
        submit()
    }
})