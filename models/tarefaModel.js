  const db = require('./database');

class Tarefa {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static async listarTarefas() {
    let tarefas = await db.query('SELECT * FROM tarefa');
    return tarefas;
  }

  async salvar() {
    let resp = await db.query(`INSERT INTO tarefa (title, description) VALUES ('${this.title}', '${this.description}')`);
    return resp;
  }
}
    app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  

module.exports = Tarefa;

