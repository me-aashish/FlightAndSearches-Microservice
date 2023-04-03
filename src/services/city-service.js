const city = require('../models/city');
const { CityRepository } = require('../repository/index')

class CityService{

    constructor(){
        this.cityPeopsitoryObj = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityPeopsitoryObj.createCity(data); 
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityPeopsitoryObj.updateCity(cityId,data);
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
             const response = await this.cityPeopsitoryObj.deleteCity(cityId);
             return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityPeopsitoryObj.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}