const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                respuesta: 'Todo salio bien'
            });
        } else {
            callback({
                respuesta: 'Todo salio malo'
            });
        } */



    });

});