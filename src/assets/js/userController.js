

function OnlineUser(s) {

  s.on('new user', (data) => {
    console.log('new user', data)
  })
}