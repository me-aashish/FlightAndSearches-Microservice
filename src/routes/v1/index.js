const express = require('express');
const router = express.Router();

const cityController = require("../../controllers/city-controller");

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.patch('/city/:id',cityController.update);
router.get('/city',cityController.getAll);
// router.post('/city',cityController.createMultiple);

module.exports = router;