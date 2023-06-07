import dotenv from 'dotenv'
import { definedProgram } from './program/program.js'

const environment = definedProgram.opts().mode

dotenv.config({path:environment === 'desarrollo'?'./src/config/env/.env.desarrollo':'./src/config/env/.env.produccion'})

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
}
