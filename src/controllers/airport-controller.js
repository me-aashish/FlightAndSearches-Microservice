const { AirportService } = require('../services/index');

const airportServiceObj = new AirportService();

const create = async(req,res)=>{
    try {
        
        const airport = await airportServiceObj.create(req.body);
        res.status(201).json({
            data: airport,
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

module.exports = {
    create
}