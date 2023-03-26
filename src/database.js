import { connect } from "mongoose";
import { MONGODB_UDI, RUTA } from "./config";
(async () => {
    try {
        const db = await connect(RUTA);
        console.log("Database connected to", db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();