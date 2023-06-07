import mongoose from "mongoose"
import { DaoMongoose } from "./DaoMongoose.js"

const usuariosSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    age:Number,
    email:{type:String, unique:true},
    password:String,
    rol:{type:String, num:'admin,user', default:'user'},
    cart:String
}, {versionKey:false})
const usuarioModel = mongoose.model('usuarios', usuariosSchema)

export const usuariosDaoManager = new DaoMongoose(usuarioModel)
