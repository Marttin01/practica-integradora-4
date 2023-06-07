import mongoose from "mongoose";
import { DaoMongoose } from "./DaoMongoose.js";

const carritosSchema = new mongoose.Schema({
    idCarrito:String,
    productos:{
        type: [{
            producto: {
                type:mongoose.Schema.Types.ObjectId,
                ref:'productos'
            },
            cantidad:Number
        }],
        default:[]
    }
},{versionKey:false})

carritosSchema.pre('find', function () {
    this.populate('productos.producto')
})



const carritoModel = mongoose.model('carritos', carritosSchema)

export const carritosDaoManager = new DaoMongoose(carritoModel)

