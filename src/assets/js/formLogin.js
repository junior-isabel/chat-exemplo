let $username
function LoginUser(event) {
    event.preventDefault()
    nickname = event.target.nickname
    socket.emit('user login', nickname.value)
    $username = nickname.value
    document.querySelector('#nickname').innerText = $username
    event.target.style.display ="none"
}


const _login = document.querySelector('#form-login')

_login.addEventListener('submit', LoginUser)