import app from "./app"; //equivale al codigo que esta en app.js
import './database';
import { PORT } from "./config";
const puerto = process.env.PORT || PORT;

app.listen(puerto);
console.log("servidor en puerto", puerto);
