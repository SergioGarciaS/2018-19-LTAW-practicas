
  function main(){
  console.log("ENTRA EN LA FUNCIÓN MAIN");
  //-- Crear un socket.io. Se establece la
  //-- conexion con el Servidor
  var socket = io();

  //-- Obtenemos los elementos de interfaz:
  //-- Boton de envio
  var send = document.getElementById('send')
  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')
  //-- Caja con el mensaje a enviar

  var msg = document.getElementById('msg')
  if(msg){
    console.log(msg)
  // -- Enviar el mensaje pulsando la tecla ENTER
    msg.addEventListener("keyup", function(event){
      if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById('send').click();
      }
    })
  }
  send.onclick = () => {
    //-- Enviamos el mensaje
    socket.emit('new_message', msg.value);
    //-- Lo notificamos en la consola del servidor
    console.log("Mensaje emitido");
    msg.value = " ";
  }
  //-- Cuando se reciba un mensaje del
  //-- servidor se muestra en el parrafo
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
  });
}
