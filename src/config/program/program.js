import { Command } from "commander"

export const program = new Command()

program
    .option('-p <port> ', 'el port', 8080)
    .option('--mode <mode>', 'entorno', 'desarrollo')
program.parse

export const definedProgram = program
