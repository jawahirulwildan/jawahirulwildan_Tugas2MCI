const seatService = require('../services/seatService');

const getAllSeat = async (req, res) => {
    seatService.getAllSeat()
    .then(seat => {
        if(!seat) {
            res.status(404).send({
                status : 'error',
                message : 'Data seat tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seat berhasil ditemukan',
                data : seat
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

const getAllSeatByID = async (req, res) => {
    const id = req.params.id;
    seatService.getAllSeatByID(id)
    .then(seat => {
        if(!seat) {
            res.status(404).send({
                status : 'error',
                message : 'Data seat tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seat berhasil ditemukan',
                data : seat
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

const createSeat = async (req, res) => {
    
    seatService.createSeat(req.body)
    .then(seat => {
        if(!seat) {
            res.status(404).send({
                status : 'error',
                message : 'Data seat tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seat berhasil ditemukan',
                data : seat
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

const updateSeat = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    
    seatService.updateSeat(data, id)
    .then(seat => {
        if(!seat){
            res.status(400).send({
                status: 'error',
                message: 'Failed update seat',
                data: seat
            });
        }
        res.status(200).send({
            status: 'success',
            message: 'Success update seat',
            data: seat
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

const deleteSeat = (req, res) => {
    const id = req.params.id;
    seatService.deleteSeat(id)
    .then(seat => {
        if(!seat){
            res.status(400).send({
                status: 'error',
                message: 'Failed delete seat',
                data: seat
            })
        }
        res.status(200).send({
            status: 'success',
            message: 'Success delete seat',
            data: seat
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
    getAllSeat,
    getAllSeatByID,
    createSeat,
    updateSeat,
    deleteSeat
}