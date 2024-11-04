// importando

const express = require('express')

//crindo uma instancia do aplicatico express

const app  = express()

//defindo uma rota para o endopint raoz ('/')
// quando uma solicitaçao GET é feita para '/' essa funçao é executada

app.get('/', function(request, response){
  //retorna uma resposta no formato JSON com uma mensagem de boas vindas
  return response.json({
    message:'ola professora dalvana'
  })
})
//defindo uma rota para o endpoint 'projetc'
// quando uma solicitaçao GET é feita '/',a função a seguir é executada

app.get('/livros', function(request,response){
    return response,express.json([
        'livro 1',
        'livro 2'
    ])
})

//defindo uma rota para criar um novo projeto
// quando uma solicitaçao dp tipo POST é feita para '/projects'
app.post('/livros',function(request,response){
    //retorna uma resposta com uma lista de projeto
    return response.json([
        'livro 1',
        'livro 2',
        'livro 3'
    ])
})

// defindo uma rota para atualizar o projeto
// o ':id' é um parametro de uma rota

app.put('/livros/:id', function(request,response){
    //retorna uma resposta JSSON cpm uma lista de projetos atualizadas
    return response.json([
        'livro 1',
        'livro 2',
        'livro 3'
    ])
})

//defindo uma rota para deletar um projeto especifico 

app.delete('/livros/:id', function(request, response){
    //retorna uma resposta com a lista do projeto apos a exclusao de um deles
    return response.json([
         'projeto 2',
         'projeto 3'
])
})




//iniciando servidor

app.listen(5000,() => {
    console.log('servidor na porta 5000 ')
})

//
   