const bookingRepository = require('../repositories/bookingRepository');

const getAllBooking = async () => {
    try {
        const booking = await bookingRepository.getAllBooking();
        return booking;
    } catch (error) {
        return error;
    }
}

const getAllBookingByStatus = async (b_status) => {
    try {
        const booking = await bookingRepository.getAllBookingByStatus(b_status);
        return booking;
    } catch (error) {
        return error;
    } 
}

const createBooking = async (data) => {
    try {
        const booking = await bookingRepository.createBooking(data);
        return booking;
    } catch (error) {
        return error;
    } 
}

const updateBooking = async (data, id) => {
    try{
        const booking = bookingRepository.updateBooking(data, id);
        return booking;
    }
    catch(error){
        throw error;
    }
}

const deleteBooking = async (id) => {
    try{
        const booking = bookingRepository.deleteBooking(id);
        return booking;
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    getAllBooking,
    getAllBookingByStatus,
    createBooking,
    updateBooking,
    deleteBooking
}