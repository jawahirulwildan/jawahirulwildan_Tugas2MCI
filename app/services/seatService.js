const seatRepository = require('../repositories/seatRepository');

const getAllSeat = async () => {
    try {
        const seat = await seatRepository.getAllSeat();
        return seat;
    } catch (error) {
        return error;
    }
}

const getAllSeatByID = async (id) => {
    try {
        const seat = await seatRepository.getAllSeatByID(id);
        return seat;
    } catch (error) {
        return error;
    } 
}

const createSeat = async (data) => {
    try {
        const seat = await seatRepository.createSeat(data);
        return seat;
    } catch (error) {
        return error;
    } 
}

const updateSeat = async (data, id) => {
    try{
        const seat = seatRepository.updateSeat(data, id);
        return seat;
    }
    catch(error){
        throw error;
    }
}

const deleteSeat = async (id) => {
    try{
        const seat = seatRepository.deleteSeat(id);
        return seat;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllSeat,
    getAllSeatByID,
    createSeat,
    updateSeat,
    deleteSeat
}