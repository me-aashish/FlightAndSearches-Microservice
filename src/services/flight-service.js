const {FlightRepository,AirplaneRepository} = require('../repository/index')
const compareDateTime = require('../utils/helper')

class FlightService{

    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareDateTime(data.arrivalTime,data.departureTime)){
                throw { error : "Arrival time can't be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneID);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats : airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FlightService