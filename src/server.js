const port = 3003

const express = require('express')
const app = express()
const dataBase = require('./database')

app.get('/produtos',(request,response,next) => {
    response.send(dataBase.getProducts()) // converter para json
})

app.get('/produtos/:id',(request,response,next) => {
    response.send(dataBase.getProduct(request.params.id))

})

app.post('/produtos',(request,response,next) => {
    const product = dataBase.saveProduct({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(product)
})
app.listen(port, () => {
    console.log(`servidor executando na porta ${port}.`)
})