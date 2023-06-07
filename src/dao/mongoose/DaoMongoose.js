function toPojo(object){
    return JSON.parse(
        JSON.stringify(
            object
        )
    )
}

export class DaoMongoose {
    #model
    constructor(mongooseModel) {
        this.#model = mongooseModel
    }

    async create(element){
        return toPojo(await this.#model.create(element))
    }

    async readOne(criteria) {
        const result = await this.#model.findOne(criteria).lean()
        if(!result) throw new Error('Not found')
        return result
    }

    async readById (id){
        const result = await this.#model.findOne({idProducto:id}).lean()
        if(!result) throw new Error('Not found')
        return result
    }

    async readByCartId (id) {
        const result = await this.#model.findOne({idCarrito:id}).lean()
        if(!result) throw new Error('Not found')
        return result
    }

    async readByEmail(email){
        const user = await this.#model.findOne({email:email}).lean()
        if(!user)throw new Error('Not found')
        return user
    }

    async readMany() {
        return await this.#model.find().lean()
    }

    async updateOne(criteria, newCriteria) {
        const modificado = await this.#model.updateOne(criteria, newCriteria)
        if(!modificado) throw new Error('Not found')
        return toPojo(modificado)
    }

    async updateMany(criteria, newCriteria) {
        await this.#model.updateMany(criteria, newCriteria)
    }

    async deleteOne(criteria) {
        const borrado = await this.#model.deleteOne(criteria)
        if(!borrado) throw new Error('Not found')
        return toPojo(borrado)
    }
}