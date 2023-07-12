const Database = require('./mysql2');

if(global.connection && global.connection.state !=='disconected')
  return global.connection;

// criar conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'sql304.infinityfree.com',
  port:'3306',
  user: 'if0_34596283',
  password: 'yUDl6lt7cZVS',
  database: 'if0_34596283_bancotarefas'
});

connection.execute(
  'SELECT * FROM `table` WHERE `tarefa` = ? AND `age` > ?',

  function(err, results, fields) {
    console.log(results); 
    console.log(fields); 

  }
);