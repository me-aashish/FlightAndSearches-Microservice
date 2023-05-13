const CrudService = require('./crud-service');
const {AirportRepository} = require('../repository/index')

class AirportService extends CrudService{
    constructor(){
        const airportRepositoryObj = new AirportRepository();
        super(airportRepositoryObj);
    }
}

module.exports = AirportService;