const db = require("../config/db");

class User {
  static async getAll() {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO users (name, lastname, id_curso) VALUES ($1, $2, $3) RETURNING *",
      [data.name, data.lastname, data.id_curso]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE users SET name = $1, lastname = $2, id_curso = $3 WHERE id = $4 RETURNING *",
      [data.name, data.lastname, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }
}

module.exports = User;
