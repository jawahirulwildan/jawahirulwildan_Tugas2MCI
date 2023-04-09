const router = require('express').Router();
const seatController = require('../controllers/seatController');

router.get('/get', seatController.getAllSeat);
router.get('/get/:id', seatController.getAllSeatByID);
router.post('/create', seatController.createSeat);
router.put('/update/:id', seatController.updateSeat);
router.delete('/delete/:id', seatController.deleteSeat);
module.exports = router;