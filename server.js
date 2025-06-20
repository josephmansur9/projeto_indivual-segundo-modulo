require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));
app.use(express.static(path.join(__dirname, "views/images")));
app.use(express.urlencoded({ extended: true }));

const session = require("express-session");
// ...existing code...
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

db.connect()
  .then(() => {
    console.log("Conectado ao banco de dados PostgreSQL");

    app.use(express.json());

    const userRoutes = require("./routes/userRoutes");
    app.use("/users", userRoutes);

    const roomRoutes = require("./routes/roomRoutes");
    app.use("/rooms", roomRoutes);

    const bookingRoutes = require("./routes/bookingRoutes");
    app.use("/bookings", bookingRoutes);

    const frontendRoutes = require("./routes/frontRoutes");
    app.use("/", frontendRoutes);

    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send("Página não encontrada");
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Erro no servidor");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
