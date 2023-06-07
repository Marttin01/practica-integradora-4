import { carritosDaoManager } from "../dao/mongoose/carritosDaoMongoose.js";
import { GenericRepository } from "./GenericRepository.js";

export const carritoRepository = new GenericRepository(carritosDaoManager)