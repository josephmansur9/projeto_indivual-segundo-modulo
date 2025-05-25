const db = require("../config/db");

const getAllRooms = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM rooms");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoomById = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM rooms WHERE id = $1", [
      req.params.id,
    ]);
    const user = result.rows[0];
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRoom = async (req, res) => {
  try {
    const { room_name, capacity } = req.body;
    const result = await db.query(
      "INSERT INTO rooms (room_name, capacity) VALUES ($1, $2) RETURNING *",
      [room_name, capacity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const { room_name, capacity } = req.body;
    const result = await db.query(
      "UPDATE rooms SET room_name = $1, capacity = $2 WHERE id = $3 RETURNING *",
      [room_name, capacity, req.params.id]
    );
    const updatedRoom = result.rows[0];
    if (updatedRoom) {
      res.status(200).json(updatedRoom);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM rooms WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    const deletedRoom = result.rows[0];
    if (deletedRoom) {
      res.status(200).json(deletedRoom);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
