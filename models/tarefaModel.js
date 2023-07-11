  const db = require('./database');

class Tarefa {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  static async listarTarefas() {
    let tarefas = await db.query('SELECT * FROM lista');
    return tarefas;
  }

  async salvar() {
    let resp = await db.query(`INSERT INTO tarefa (title, description) VALUES ('${this.title}', '${this.description}')`);
    return resp;
  }
}

module.exports = Tarefa;

