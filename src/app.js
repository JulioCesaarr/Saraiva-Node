import express from "express";
import db from "../config/DbConnect.js";
import routes from "../src/Routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso"); 
})

const app = express();
app.use(express.json())
routes(app);
export default app