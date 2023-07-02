const Database = require('./mysql');

class UserModel {
  async getUsers() {
    const sql = 'SELECT * FROM users';
    const users = await Database.query(sql);
    return users;
  }

  async addUser(user) {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [user.name, user.email];
    const result = await Database.query(sql, values);
    return result.insertId;
  }
}

module.exports = new UserModel();
