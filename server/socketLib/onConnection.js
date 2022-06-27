
const moment = require('moment');

const onConnection = ( socket, io ) => {

    setInterval(() => {
        socket.emit('currentTime', moment().format('h:mm a'))
    }, 1000)


    socket.on('joinClass', (data) => {

        /* MOCKING MARIANA RESERVATION OBJECT
            data = {
                "customer": {
                    "full_name": "Cheryl Clark"
                }
            }
        */

        io.emit('addSeat', data)
    })

}

module.exports = onConnection