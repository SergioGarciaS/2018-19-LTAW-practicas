var http = require('http');
var fs = require ('fs');
console.log("Arrancando servidor...")


http.createServer(function (req, res) {
  console.log("Recurso solicitado (URL): " + req.url)

  if(req.url = '/'){
    console.log("init");
    fs.readFile('index.html', (err,data) => {
      res.writeHead(200, {'Content-type': 'text/html'})
      res.end(data)
    })
  }

  console.log("Peticion atendida")
}).listen(8080);
