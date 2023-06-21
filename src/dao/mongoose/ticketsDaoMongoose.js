import mongoose from "mongoose";
import { DaoMongoose } from "./DaoMongoose.js";

const ticketSchema = new mongoose.Schema({
    code:String,
    purchase_datetime:String,
    amount:Number,
    purcharser:String
}, {versionKey:false})

const ticketModel = mongoose.model('tickets',ticketSchema)

export const ticketsDaoManager = new DaoMongoose(ticketModel)