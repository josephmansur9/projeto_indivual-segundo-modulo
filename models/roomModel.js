const db = require("../config/db");

class Room {
  static async getAll() {
    const result = await db.query("SELECT * FROM rooms");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM rooms WHERE room_id = $1", [
      id,
    ]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO rooms (room_name, capacity) VALUES ($1, $2) RETURNING *",
      [data.room_name, data.capacity]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE rooms SET room_name = $1, capacity = $2 WHERE room_id = $3 RETURNING *",
      [data.room_name, data.capacity, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM rooms WHERE room_id = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }
}

module.exports = Room;
