const {seat} = require('../models');



const getAllSeat = () => {
    return seat.findAll({
        attributes: ['s_seat_code']
    })
}

const getAllSeatByID = (id) => {
    return seat.findOne({
        where: {
            id: id
        } 
    })
}

const createSeat = (data) => {
    return seat.create(data)
}

const updateSeat = (data, id) => {
    return seat.update(data, {
        where: {
            id: id
        }
    })
}

const deleteSeat = (id) => {
    return seat.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllSeat,
    getAllSeatByID,
    createSeat,
    updateSeat,
    deleteSeat
}