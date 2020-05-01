function channel(canal) {

    canal.on('connect', (event) => {
        console.log('siuu', event)
    })
    canal.on('message chat', (data) => {
        console.log('me: ', data)
    })
}