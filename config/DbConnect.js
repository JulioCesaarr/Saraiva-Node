import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@livraria.tconz.mongodb.net/Livraria-node");

let db = mongoose.connection;

export default db;