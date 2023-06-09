const { City } = require('../models/index');
const { Op } = require("sequelize");

class CityRepository{

    // constructor(){

    // }

    async createCity(data){
        try {
            // const cityArr = data.name.split(',');
            // // console.log([...cityArr]);
            // if(cityArr.length > 1){
            //     const city = await City.bulkCreate(
            //         cityArr
            //     )
            //     return city;
                
            // }
            
            const city = await City.create({
                    name : data.name
            })
            
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
        
    }

    async deleteCity(cityId){

        try {
            
            await City.destroy({
                where :{
                    id : cityId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
        
    }

    async updateCity(cityId,data){

        try {
            const city = City.update(data,{
                where:{
                    id : cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }

    }

    async getCity(cityId){

        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }

    }

    async getAllCities(filter){

        try {
            if(filter.name){
                // console.log(filter.name);
                const cities = await City.findAll({
                    where:{
                       name:{
                        [Op.startsWith]: filter.name
                       }
                    }
                });
                return cities;
            }
            if(filter.sort){
                // console.log(filter.name);
                const cities = await City.findAll({
                   order : [
                    [filter.sort, "ASC"]
                   ]
                });
                return cities;
            }
            
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }

    }
    // async createManyCities(cityArray){

    //     try {
    //         const city = await City.bulkCreate({
    //             cityArray
    //         });
    //         return city;

    //     } catch (error) {
    //         console.log("Something went wrong in repository layer");
    //         throw {error};
    //     }

    // }

}

module.exports = CityRepository