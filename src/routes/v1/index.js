const express = require('express');
const router = express.Router();

const cityController = require("../../controllers/city-controller");
const flightController = require('../../controllers/flight-controller')

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
// router.post('/city',cityController.createMultiple);

router.post('/flights',flightController.create)
router.get('/flights',flightController.getAll)
router.get('/flights/:id',flightController.get);


module.exports = router;