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
             return response;
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

    async getAllCities(filter){
        try {
            if(filter.name || filter.sort){
                // console.log(filter.name);
                const cities = await this.cityPeopsitoryObj.getAllCities(filter);
                return cities;
            }
            const cities = await this.cityPeopsitoryObj.getAllCities();
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService