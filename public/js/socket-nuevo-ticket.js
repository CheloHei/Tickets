//Comando para establecer comunicacion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect',()=>{
    console.log('Conectado al servidor');
});
socket.on('disconnect',()=>{
    console.log('Desconectado del servidor');
});


socket.on('estadoActual',function (resp) {
    label.text(resp.actual);
});

$('button').click(function () { 
    socket.emit('siguienteTicket',null,function (siguienteTicket) {
        label.text(siguienteTicket);
    });
    
});
