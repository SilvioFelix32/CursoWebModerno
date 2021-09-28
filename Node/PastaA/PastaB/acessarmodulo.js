const Modulo1 = require('../../Modulo1')
console.log(Modulo1)

const http = require ('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}) .listen(8080)