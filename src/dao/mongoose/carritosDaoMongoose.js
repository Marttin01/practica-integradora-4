import mongoose from "mongoose";
import { DaoMongoose } from "./DaoMongoose.js";

const carritosSchema = new mongoose.Schema({
    idCarrito:String,
    productos:[{
        idProduct:{type:String, default:""},
        cantidad:{type:Number, default:0} 
    },{versionKey:false}]
},{versionKey:false})

// carritosSchema.pre('findOne', function () {
//     this.populate('productos.producto')
// })



const carritoModel = mongoose.model('carritos', carritosSchema)

export const carritosDaoManager = new DaoMongoose(carritoModel)

