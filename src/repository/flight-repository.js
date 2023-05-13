const {Flight} = require('../models/index');
const { Op } = require('sequelize')

class FlightRepository{

    // constructor(){
    //     this.flightRepository = new FlightRepository()
    // }
    
    createFilter(data){
        let filter = {};

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        let priceFilter = [];

        if(data.minPrice){
            priceFilter.push( { price: { [Op.gte]: data.minPrice } } );
        }
 
        if(data.maxPrice){
            priceFilter.push( {price: { [Op.lte]: data.maxPrice } } );
        }
        // console.log(priceFilter);

        Object.assign(filter, { [Op.and]:priceFilter } );
        // console.log(filter);
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.createFilter(filter);
            // console.log(filterObject);
            const flight = await Flight.findAll({
                where : filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

} 

module.exports = FlightRepository