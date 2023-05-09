const {Flight} = require('../models/index');

class FlightRepository{

    // constructor(){
    //     this.flightRepository = new FlightRepository()
    // }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

}

module.exports = FlightRepository