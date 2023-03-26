import app from "./app"; //equivale al codigo que esta en app.js
import './database';
import { PORT } from "./config";

app.listen(PORT);
console.log("servidor en puerto", PORT);
