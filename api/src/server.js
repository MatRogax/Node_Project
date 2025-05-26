const port = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./database')

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}.`)
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(request,response,next) => {
    response.send(dataBase.getProducts()) 
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
app.put('/produtos/:id',(request,response,next) => {
    const product = dataBase.saveProduct({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(product)
})
app.delete('/produtos/:id',(request,response,next) => {
    const product = dataBase.deleteProduct(request.params.id)
    response.send(product)
})

