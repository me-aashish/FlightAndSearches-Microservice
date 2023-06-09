const { CityService } = require('../services/index');

const cityServiceObj = new CityService();


const create = async(req,res)=>{
    try {
        // const cityArr = req.body.name.split(',');
        // if(cityArr.length > 1){
        //     const city = await cityServiceObj.createCity(req.body);
        // }
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
        
        const respond = await cityServiceObj.deleteCity(req.params.id);
        res.status(200).json({
            data: respond,
            success: true,
            message: 'Successfully deleted a city',
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
        const city = await cityServiceObj.getCity(req.params.id);
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
        const city = await cityServiceObj.updateCity(req.params.id,req.body);
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

const getAll = async(req,res)=>{
    try {
        
        const cities = await cityServiceObj.getAllCities(req.query);
        res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch all the cities',
            err: error
        })
    }
}

// const createMultiple = async(req,res)=>{
//     try {
//         const cityArray = req.body.name.split(',');
//         const cities = await cityServiceObj.createManyCities(cityArray);
//     } catch (error) {
//         res.status(500).json({
//             data: {},
//             success: false,
//             message: 'Not able to fetch all the cities',
//             err: error
//         })
//     }
// }


module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    // createMultiple
}