const seminarService = require('../services/seminarService');

const getAllSeminar = async (req, res) => {
    seminarService.getAllSeminar()
    .then(seminar => {
        if(!seminar) {
            res.status(404).send({
                status : 'error',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : seminar
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

const getAllSeminarByPrice = async (req, res) => {
    const SM_PRICE = req.params.SM_PRICE;
    seminarService.getAllSeminarByPrice(SM_PRICE)
    .then(seminar => {
        if(!seminar) {
            res.status(404).send({
                status : 'error',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : seminar
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

const createSeminar = async (req, res) => {
    seminarService.createSeminar(req.body)
    .then(seminar => {
        if(!seminar) {
            res.status(404).send({
                status : 'error',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : seminar
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

const updateSeminar = (req, res) => {
    const data = req.body;
    const SM_TITLE = req.params.SM_TITLE;
    
    seminarService.updateSeminar(data, SM_TITLE)
    .then(seminar => {
        if(!seminar){
            res.status(400).send({
                status: 'error',
                message: 'Failed update seminar',
                data: seminar
            });
        }
        res.status(200).send({
            status: 'success',
            message: 'Success update seminar',
            data: seminar
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

const deleteSeminar = (req, res) => {
    const SM_TITLE = req.params.SM_TITLE;
    seminarService.deleteSeminar(SM_TITLE)
    .then(seminar => {
        if(!seminar){
            res.status(400).send({
                status: 'error',
                message: 'Failed delete seminar',
                data: seminar
            })
        }
        res.status(200).send({
            status: 'success',
            message: 'Success delete seminar',
            data: seminar
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
    getAllSeminar,
    getAllSeminarByPrice,
    createSeminar,
    updateSeminar,
    deleteSeminar
}