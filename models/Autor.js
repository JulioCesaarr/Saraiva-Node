import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
);

const autores = mongoose.model("autores", AutorSchema)

export default autores;