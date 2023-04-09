const {booking} = require('../models');



const getAllBooking = () => {
    return booking.findAll({
        attributes: ['B_DATE', 'B_QUANTITY', 'B_TOTAL', 'B_STATUS']
    })
}

const getAllBookingByStatus = (b_status) => {
    return booking.findAll({
        where: {
            b_status: b_status
        } 
    })
}

const createBooking = (data) => {
    return booking.create(data)
}

const updateBooking = (data, id) => {
    return booking.update(data, {
        where: {
            id: id
        }
    })
}

const deleteBooking = (id) => {
    return booking.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllBooking,
    getAllBookingByStatus,
    createBooking,
    updateBooking,
    deleteBooking
}