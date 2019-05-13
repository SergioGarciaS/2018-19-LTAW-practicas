var http = require('http');
var fs = require ('fs');
var path = require('path');
var url = require('url');

console.log("Arrancando servidor...")
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Leer las cookies
  var cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)


  console.log("Recurso solicitado (URL): " + req.url)

  if(req.url == '/'){
    console.log("init");
    fs.readFile('index.html', (err,data) => {
      res.writeHead(200, {'Content-type': 'text/html'})
      res.end(data)
    })
  }
  if(req.url.split(".")[1] == 'jpg' || req.url.split(".")[1] == 'jpeg' ){
    let dir_path = path.join(__dirname, req.url)
    console.log(dir_path);
    fs.readFile(dir_path, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        console.log("Peticion recibida")
        console.log("Recurso solicitado: " + req.url)
    res.end(data)
  })
  }
  if(req.url.split(".")[1] == 'png'){
    let dir_path = path.join(__dirname, req.url)
    console.log(dir_path);
    fs.readFile(dir_path, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'image/png' })
        console.log("Peticion recibida")
        console.log("Recurso solicitado: " + req.url)
    res.end(data)
  })
  }
  if(req.url.split(".")[1] == 'html'){
    let dir_path = path.join(__dirname, req.url)
    console.log(dir_path);
    fs.readFile(dir_path, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        console.log("Peticion recibida")
        console.log("Recurso solicitado: " + req.url)
    res.end(data)
  })
  }
  if(req.url.split(".")[1] == 'css'){
    let dir_path = path.join(__dirname, req.url)
    console.log(dir_path);
    fs.readFile(dir_path, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        console.log("Peticion recibida")
        console.log("Recurso solicitado: " + req.url)
    res.end(data)
  })
  }
}).listen(8080);
