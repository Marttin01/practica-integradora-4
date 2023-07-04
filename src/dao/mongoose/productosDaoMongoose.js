import mongoose from "mongoose";
import { DaoMongoose } from "./DaoMongoose.js";

const productosSchema = new mongoose.Schema({
    title:String,
    description:String,
    stock:Number,
    price:Number,
    idProducto:String,
    status:Boolean,
    owner:String
}, {versionKey:false}) 
const productModel = mongoose.model('productos',productosSchema)

export const productosDaoManager = new DaoMongoose(productModel)