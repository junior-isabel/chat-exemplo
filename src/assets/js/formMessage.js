
function MessageChat(event) {
    event.preventDefault()
    socket.emit('message chat', 'teste')
}


const _message = document.querySelector('#form-message')

_message.addEventListener('submit', MessageChat)