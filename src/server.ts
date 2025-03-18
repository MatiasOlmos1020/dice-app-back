import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diceRoutes from "./routes/dice.routes";

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Permite recibir JSON en las requests

app.use("/api/dice", diceRoutes);

app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
