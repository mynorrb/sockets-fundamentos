var socket = io();

//escuchar
socket.on('connect', function() {

    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Mynor',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('respuesta server: ', respuesta);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});