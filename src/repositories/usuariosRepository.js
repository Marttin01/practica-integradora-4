import { usuariosDaoManager } from "../dao/mongoose/usuariosDaoMongoose.js"
import { GenericRepository } from "./GenericRepository.js"

export const usuarioRepository = new GenericRepository(usuariosDaoManager)