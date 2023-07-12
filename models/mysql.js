async function connect(){
  if(global.connection && global.connection.state !=='disconected')
    return global.connection;

  // criar conexão com o banco de dados
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection({
    host: 'sql304.infinityfree.com',
    port:'3306',
    user: 'if0_34596283',
    password: 'yUDl6lt7cZVS',
    database: 'if0_34596283_bancotarefas'
  });

  console.log("conectou no mysql");
  global.connection = connection;
  return connection;
}

async function query(sql){
  const conn = await connect();
  const [rows]= await conn.query(sql);
  console.log(rows);
  return rows;
}

module.exports = {query}