const router = require('express').Router();
const bookingController = require('../controllers/bookingController');

router.get('/get', bookingController.getAllBooking);
router.get('/get/:b_status', bookingController.getAllBookingByStatus);
router.post('/create', bookingController.createBooking);
router.put('/update/:id', bookingController.updateBooking);
router.delete('/delete/:id', bookingController.deleteBooking);
module.exports = router;