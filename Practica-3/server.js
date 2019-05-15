var http = require('http');
var fs = require ('fs');
var path = require('path');
var url = require('url');

console.log("Arrancando servidor...")
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Leer las cookies TENER EN CUENTA EL ORDEN DE LAS COOKIES PARA IMPRIMIR LA TIENDA, TIENE QUE ESTAR PRIMERO LOGUEADO

  var cookie = req.headers.cookie;
  if (cookie){
  console.log("TODAS LAS COOKIES: " + cookie)
  lol = cookie.split(";", )
  console.log("Cookie: " + lol[0].split("=", )[0])
}

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
    console.log("entra aqui")
          if (req.method === 'POST') {
            // Handle post info...
            console.log("entra aqui2")
            var content = `
            <!DOCTYPE html>
            <html lang="es">
              <head>
                <meta charset="utf-8">
                <title>FORM 1</title>
              </head>
              <body>
                <p>Recibido: `

            req.on('data', chunk => {
                //-- Leer los datos (convertir el buffer a cadena)
                data = chunk.toString();
                campos = data.split("&",)
                console.log(data.split("&",))
                //-- Añadir los datos a la respuesta
                content += '<p> Nombre:' + campos[0].split("=",)[1] + '</p><p> Apellido: ' + campos[1].split("=")[1] +  '</p><p> email: ' + campos[2].split("=",)[1].replace("%40", "@") + '</p>';

                if (campos[3].split("=",)[1] == '1'){
                  content += '<p> Método de pago:  Paypal </p>';
                }else if (campos[3].split("=",)[1] == '2'){
                  content += '<p> Método de pago:  Tarjeta </p>';
                }else if(campos[3].split("=",)[1] == '3'){
                  content += '<p> Método de pago:  TTransferencia </p>'; 
                }
                //-- Fin del mensaje. Enlace al formulario
                content += `
                    </p>
                    <a href="/">VOLVER A INICIO</a>
                  </body>
                </html>
                `
                //-- Mostrar los datos en la consola del servidor
                console.log("Datos recibidos: " + data)
                res.statusCode = 200;
                res.end(content)
             });
          }

  }
  if(q.pathname == '/cesta')
  {
    fs.readFile('cesta.html', (err,data) => {
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


}).listen(8080);
