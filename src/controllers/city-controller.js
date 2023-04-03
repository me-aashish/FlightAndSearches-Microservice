const { CityService } = require('../services/index');

const cityServiceObj = new CityService();


const create = async(req,res)=>{
    try {
        const city = await cityServiceObj.createCity(req.body);
        res.status(201).json({
            data: city,
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

//DELETE -> /city/:id
const destroy = async(req,res)=>{
    try {
        const response = await cityServiceObj.deleteCity(re.params.id);
        res.response(200).json({
            data: response,
            success: true,
            message: 'Successfully destroyed a city',
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        })
    }
}

//GET -> /city/:id
const get = async(req,res)=>{
    try {
        const city = await cityServiceObj.getCity(req.body.id);
        res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        })
             
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        })
    }
}

//PATCH -> /city/:id
const update = async(req,res)=>{
    try {
        const city = await cityServiceObj.updateCity(req.body.id);
        res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        })
    }
}


module.exports = {
    create,
    destroy,
    get,
    update
}