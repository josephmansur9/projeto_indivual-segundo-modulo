const db = require("../config/db");

class Booking {
  static async getAll() {
    const result = await db.query("SELECT * FROM bookings");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query(
      "SELECT * FROM bookings WHERE booking_id = $1",
      [id]
    );
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      "INSERT INTO bookings (user_id, room_id, booking_data, descricao) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.user_id, data.room_id, data.booking_data, data.descricao]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      "UPDATE bookings SET user_id = $1, room_id = $2, booking_data = $3, descricao = $4 WHERE booking_id = $5 RETURNING *",
      [data.user_id, data.room_id, data.booking_data, data.descricao, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query(
      "DELETE FROM bookings WHERE booking_id = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }
}

module.exports = Booking;
