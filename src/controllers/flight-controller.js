const {FlightService} = require('../services/index');
const { successCodes } = require('../utils/error-codes')

const flightServiceObj = new FlightService();

const create = async(req,res)=>{
    try {
        const flight = await flightServiceObj.createFlight(req.body);
        res.status(successCodes.CREATED).json({
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

const get = async(req,res)=>{
    try {
        const flight = await flightServiceObj.getFlight(req.params.id);
        res.status(successCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        })
    }
}

const getAll = async(req,res)=>{
    try {
        const flight = await flightServiceObj.getAllFlights(req.query);
        res.status(successCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        })
    }
}
module.exports = {
    create,
    getAll,
    get
}