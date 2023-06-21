import { ticketsDaoManager } from "../dao/mongoose/ticketsDaoMongoose.js";
import { GenericRepository } from "./GenericRepository.js";

export const ticketRepository = new GenericRepository(ticketsDaoManager)