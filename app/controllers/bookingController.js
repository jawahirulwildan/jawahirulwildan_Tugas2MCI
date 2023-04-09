const bookingService = require('../services/bookingService');

const getAllBooking = async (req, res) => {
    bookingService.getAllBooking()
    .then(booking => {
        if(!booking) {
            res.status(404).send({
                status : 'error',
                message : 'Data booking tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data booking berhasil ditemukan',
                data : booking
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const getAllBookingByStatus = async (req, res) => {
    const b_status = req.params.b_status;
    bookingService.getAllBookingByStatus(b_status)
    .then(booking => {
        if(!booking) {
            res.status(404).send({
                status : 'error',
                message : 'Data booking tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data booking berhasil ditemukan',
                data : booking
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createBooking = async (req, res) => {
    bookingService.createBooking(req.body)
    .then(booking => {
        if(!booking) {
            res.status(404).send({
                status : 'error',
                message : 'Data booking tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data booking berhasil ditemukan',
                data : booking
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const updateBooking = (req, res) => {
    const data = req.body;
    const id = req.params.id;
   
    bookingService.updateBooking(data, id)
    .then(booking => {
        if(!booking){
            res.status(400).send({
                status: 'error',
                message: 'Failed update booking',
                data: booking
            });
        }
        res.status(200).send({
            status: 'success',
            message: 'Success update booking',
            data: booking
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: 'internal server error',
            data: err
        });
    })
}

const deleteBooking = (req, res) => {
    const id = req.params.id;
    bookingService.deleteBooking(id)
    .then(booking => {
        if(!booking){
            res.status(400).send({
                status: 'error',
                message: 'Failed delete booking',
                data: booking
            })
        }
        res.status(200).send({
            status: 'success',
            message: 'Success delete booking',
            data: booking
        })
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

module.exports = {
    getAllBooking,
    getAllBookingByStatus,
    createBooking,
    updateBooking,
    deleteBooking
}