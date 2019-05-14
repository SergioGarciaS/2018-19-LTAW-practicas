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
  lol = cookie.split(";", )
  console.log("Cookie: " + lol[1].split("=", )[0])


  console.log("Recurso solicitado (URL): " + req.url)

  if(req.url == '/'){
    console.log("init");
    fs.readFile('index.html', (err,data) => {
      res.writeHead(200, {'Content-type': 'text/html'})
      res.end(data)
    })
  }
  if(q.pathname == '/login'){
    data = "Has sido registrado correctamente"
    res.setHeader('Set-Cookie', 'user=obijuan')

    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(data)
    console.log("Guardado_cookie")
  }
  if(q.pathname == '/form')
  {
    var d = decodeURIComponent(q.cookie);
    console.log(d)
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(d)
    // data = "tu eres un crack"
  }
  // Guardado de cookies de RUBIK

  if (q.pathname == '/r1')
  {
    res.setHeader('Set-Cookie', '"./img/r3.jpg" = "RUBIK 3x3"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  if (q.pathname == '/r2')
  {
    res.setHeader('Set-Cookie', '"./img/r4.jpg" = "RUBIK 4x4"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  if (q.pathname == '/r3')
  {
    res.setHeader('Set-Cookie', '"./img/r5.jpg" = "RUBIK 5x5"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  // Guardado de cookies de Shengshou
  if (q.pathname == '/s1')
  {
    res.setHeader('Set-Cookie', '"./img/s3.jpg" = "SHENSHOU 3x3"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  if (q.pathname == '/s2')
  {
    res.setHeader('Set-Cookie', '"./img/s4.jpg" = "SHENSHOU 4x4"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  if (q.pathname == '/s3')
  {
    res.setHeader('Set-Cookie', '"./img/s5.jpg" = "SHENSHOU 5x5"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }

  // Guardado de cookies de VC
  if (q.pathname == '/v1')
  {
    res.setHeader('Set-Cookie', '"./img/vc3.jpg" = "V-CUBE 3x3"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  if (q.pathname == '/v2')
  {
    res.setHeader('Set-Cookie', '"./img/vc4.jpg" = "V-CUBE 4x4"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
  }
  if (q.pathname == '/v3')
  {
    res.setHeader('Set-Cookie', '"./img/vc5.jpg" = "V-CUBE 5x5"')
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end()
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
