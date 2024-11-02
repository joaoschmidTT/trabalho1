// importando

const express = require('express')

//crindo uma instancia do aplicatico express

const app  = express()

//defindo uma rota para o endopint raoz ('/')
// quando uma solicitaçao GET é feita para '/' essa funçao é executada

app.get('/', function(request, response){
  //retorna uma resposta no formato JSON com uma mensagem de boas vindas
  return response.json({
    message:'ola turma 5938'
  })
})
//defindo uma rota para o endpoint 'projetc'
// quando uma solicitaçao GET é feita '/',a função a seguir é executada

app.get('/projects', function(request,response){
    return response,express.json([
        'projeto 1',
        'projeto 2'
    ])
})

//defindo uma rota para criar um novo projeto
// quando uma solicitaçao dp tipo POST é feita para '/projects'
app.post('/projects',function(request,response){
    //retorna uma resposta com uma lista de projeto
    return response.json([
        'projeto 1',
        'projeto 2',
        'peojeto 3'
    ])
})

// defindo uma rota para atualizar o projeto
// o ':id' é um parametro de uma rota

app.put('/projects/:id', function(request,response){
    //retorna uma resposta JSSON cpm uma lista de projetos atualizadas
    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ])
})

//defindo uma rota para deletar um projeto especifico 

app.delete('/projects/:id', function(request, response){
    //retorna uma resposta com a lista do projeto apos a exclusao de um deles
    return response.json([
         'projeto 2',
         'projeto 3'
])
})




//inciando o servidor na porta 9093(para orientar no terminal que o servidor foi iniciado ,vamos colocar uma mensagem)

app.listen(9093,() => {
    console.log('servidor iniciado na porta 9093')
})
   