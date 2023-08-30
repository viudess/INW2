var http = require('http')
var server = http.createServer(function(request, response){
    response.writeHead("200", {"Content-type": "text/html"});
    if(request.url == "/"){
        response.write("<h1>Pagina Principal</h1>");
    } 
    else if (request.url == "/login"){
        response.write("<h1>Acesso ao login do projeto</h1>"); 
    } 
    else {
        response.write("<h1>Pagina nao encontrada!!!</h1>");
    }
    response.end();
});

const port = 3000;
server.listen(port, () =>{
    console.log(`Servidor executando em http://localhost:${port}/`)
})