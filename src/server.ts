import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import diceRoutes from "./routes/dice.routes";
import { connectDB } from "./config/db";

dotenv.config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); // Permite recibir JSON en las requests
app.use("/api/dice", diceRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("¡Servidor funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
