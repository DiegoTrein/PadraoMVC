const Database = require('./mysql2');

if(global.connection && global.connection.state !=='disconected')
  return global.connection;

// get the client


// create the connection to database
const connection = mysql.createConnection({
  host: 'sql304.infinityfree.com',
  port:'3306',
  user: 'if0_34596283',
  password: 'yUDl6lt7cZVS',
  database: 'if0_34596283_bancotarefas'
});

// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Rick C-137', 53],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

  }
);