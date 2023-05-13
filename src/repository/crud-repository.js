class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async update(modelId,data){
        try {
            const result = await this.model.update(data,{
                where : {
                    id : modelId
                }
            })
            return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async delete(modelId){
        try {
            await Airplane.destroy({
                where :{
                    id : modelId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

}

module.exports = CrudRepository;