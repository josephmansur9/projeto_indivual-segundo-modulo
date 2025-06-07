const express = require("express");
const router = express.Router();
const path = require("path");

// Roteamento para páginas dinâmicas
router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Página Inicial",
    content: path.join(__dirname, "../views/pages/views/login"),
  });
});

router.get("/about", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Página Inicial",
    content: path.join(__dirname, "../views/pages/views/notificacao"),
  });
});

router.get("/notificacao", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Página Inicial",
    content: path.join(__dirname, "../views/pages/views/notificacao"),
  });
});

// ...existing code...
router.post("/reservas", async (req, res) => {
  const db = require("../config/db");
  const path = require("path");
  const { data, horario, sala, numero, categoria } = req.body;

  // Convert form data to timestamp
  // ...existing code...
  // Espera data no formato dd/mm/aa ou dd/mm/yyyy
  let [dia, mes, ano] = data.split("/");
  if (ano.length === 2) {
    ano = "20" + ano; // converte '25' para '2025'
  }
  const booking_data = `${ano}-${mes}-${dia} ${horario.slice(
    0,
    2
  )}:${horario.slice(2, 4)}:00`;
  // ...existing code...

  // Find room_id
  const roomResult = await db.query(
    "SELECT room_id FROM rooms WHERE room_name = $1",
    [sala]
  );
  const room_id = roomResult.rows[0] ? roomResult.rows[0].room_id : null;

  // Use session user or fallback to 1
  const user_id = req.session.userId || 1;

  // Check for existing booking
  const conflict = await db.query(
    "SELECT * FROM bookings WHERE room_id = $1 AND booking_data = $2",
    [room_id, booking_data]
  );

  let booking;
  let conflictMsg = null;

  if (conflict.rows.length > 0) {
    // There is already a booking at this time
    booking = conflict.rows[0];
    conflictMsg = "Já existe uma reserva para este horário e sala.";
  } else {
    // No conflict, insert new booking
    const result = await db.query(
      "INSERT INTO bookings (user_id, room_id, booking_data, descricao) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, room_id, booking_data, categoria]
    );
    booking = result.rows[0];
  }

  // Prepare data for notification screen
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Notificação",
    content: path.join(__dirname, "../views/pages/views/notificacao"),
    booking: {
      data,
      horario,
      sala,
      descricao: categoria,
      conflictMsg,
    },
  });
});
// ...existing code...

module.exports = router;
