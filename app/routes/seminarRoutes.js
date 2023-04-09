const router = require('express').Router();
const seminarController = require('../controllers/seminarController');

router.get('/get', seminarController.getAllSeminar);
router.get('/get/:SM_PRICE', seminarController.getAllSeminarByPrice);
router.post('/create', seminarController.createSeminar);
router.put('/update/:SM_TITLE', seminarController.updateSeminar);
router.delete('/delete/:SM_TITLE', seminarController.deleteSeminar);
module.exports = router;