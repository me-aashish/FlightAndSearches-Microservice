const {FlightService} = require('../services/index');

const flightServiceObj = new FlightService();

const create = async(req,res)=>{
    try {
        const flight = await flightServiceObj.createFlight(req.body);
        res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the city',
            err: error
        })
    }
}
module.exports = {create}