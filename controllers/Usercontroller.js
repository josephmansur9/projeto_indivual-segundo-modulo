const db = require("../config/db");

const getAllUsers = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [
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

const createUser = async (req, res) => {
  try {
    const { name, lastname, id_curso } = req.body;
    const result = await db.query(
      "INSERT INTO users (name, lastname, id_curso) VALUES ($1, $2, $3) RETURNING *",
      [name, lastname, id_curso]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, lastname, id_curso } = req.body;
    const result = await db.query(
      "UPDATE users SET name = $1, lastname = $2, id_curso = $3 WHERE id = $4 RETURNING *",
      [name, lastname, id_curso, req.params.id]
    );
    const updatedUser = result.rows[0];
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    const deletedUser = result.rows[0];
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
