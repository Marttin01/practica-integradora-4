import { productosDaoManager } from "../dao/mongoose/productosDaoMongoose.js";
import { GenericRepository } from "./GenericRepository.js";

export const productosRepository = new GenericRepository(productosDaoManager)