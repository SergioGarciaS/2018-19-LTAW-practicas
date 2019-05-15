var app = require('express')()
var http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 3001

var clients_number = 0;

//-- Punto de entrada pricipal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Página principal: /")
});

//-- Servir el CSS
app.get('/chat.css', function(req, res){
  res.sendFile(__dirname + '/chat.css');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Fichero de estilo solicitado")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  //res.send('Probando express... ¡¡¡qué fácil!!!')
  console.log("Fichero js solicitado")
});

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado

io.on('connection', function(socket){
  console.log('--> Usuario conectado \r\n');
  clients_number += 1;
  console.log(clients_number);
  socket.emit('new_message', 'Bienvenido amigo <br>');
  socket.broadcast.emit('new_message', 'Hay un nuevo usuario, bienvenido!<br>');
  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario desconectado');
    clients_number -= 1;
    io.emit('new_message', 'Se ha desconectado un usuario<br>');
    console.log(clients_number);

  });
socket.on('new_message', msg => {
  if (msg == '/help' || msg == ' /help'){
    msg = '<li>Help:' + '</li><li>' + '/list: Usuarios conectados'
              + '</li><li>' + '/hello: Mensaje del servidor' + '</li><li>'
              + '/date: Para saber la fecha</li>';
   socket.emit('new_message', msg);
 }else if (msg == '/list' || msg == ' /list'){
   msg = 'El numero de clientes es: ' + clients_number;
   socket.emit('new_message', msg);
 }else if (msg == '/hello' || msg == ' /hello'){
   msg = 'QUE PASA LOCO!! SOY EL SERVIDOR';
   socket.emit('new_message', msg);
 }else if (msg == '/date' || msg == ' /date'){
   var d = new Date();
   var month  = d.getMonth() + 1;
   msg =  'hoy es: ' + d.getDate() + '/' +  month + '/' + d.getFullYear();
   socket.emit('new_message', msg);
 }else{
   io.emit('new_message', msg);
 }

})

});
