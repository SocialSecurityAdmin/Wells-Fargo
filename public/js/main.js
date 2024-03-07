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
greetings.innerHTML = `<h1>Good ${greeting}</h1>`

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const submit = document.querySelector('#submit')

function changeColor(){
    if(!username.value == '' && !password.value == ''){
        submit.style.backgroundColor = '#d61e28'
    } else {
        submit.style.backgroundColor = ''
    }
}

username.addEventListener('input', changeColor)
password.addEventListener('input', changeColor)
submit.addEventListener('click', () => {
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
})