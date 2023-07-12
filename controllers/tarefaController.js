const Tarefa = require('../models/tarefaModel'); 
let tarefas = [];

async function getTarefas(req, res) { 
resp= await Tarefa.listarTarefas();
console.log(resp);
res.render('tarefas', { tarefas }); 
} 

function teste(req, res){
    res.render('teste',null);
}


function addTarefa(req, res) { 
 const { title } = req.body; 
 const tarefa = new Tarefa(Date.now(), title, false); 
 tarefas.push(tarefa); 
 res.redirect('/tarefas'); 
} 

function sendMessage(message) {
    if (message.trim() !== '') {
      fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message);
        })
        .catch((error) => {
          console.error('Erro ao enviar a mensagem:', error);
        });
  
      messageInput.value = '';
    }
  }
  
module.exports = { getTarefas, addTarefa, teste };
