var http = require('http');

console.log("Arrancando servidor...")


http.createServer(function (req, res) {
  console.log("--> Cabecera de la solicitud: ")
    console.log("HOST: " + req.headers.host)
  console.log("USER AGENT: " + req.headers['user-agent'])
  console.log("Recurso solicitado (URL): " + req.url)
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  console.log("Peticion atendida")
}).listen(8080);
