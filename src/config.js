import { config } from "dotenv";

config();

export const MONGODB_UDI = process.env.MONGODB_UDI || "mongodb://127.0.0.1/escuela" //llama a la base que está en atlas y si no existe, ocupará la local.
export const PORT = process.env.PORT || 4200;
export const RUTA = process.env.RUTA || process.env.MONGODB_UDI