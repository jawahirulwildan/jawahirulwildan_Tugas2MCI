const seminarRepository = require('../repositories/seminarRepository');

const getAllSeminar = async () => {
    try {
        const seminar = await seminarRepository.getAllSeminar();
        return seminar;
    } catch (error) {
        return error;
    }
}

const getAllSeminarByPrice = async (SM_PRICE) => {
    try {
        const seminar = await seminarRepository.getAllSeminarByPrice(SM_PRICE);
        return seminar;
    } catch (error) {
        return error;
    } 
}

const createSeminar = async (data) => {
    try {
        const seminar = await seminarRepository.createSeminar(data);
        return seminar;
    } catch (error) {
        return error;
    } 
}

const updateSeminar = async (data, SM_TITLE) => {
    try{
        const seminar = seminarRepository.updateSeminar(data, SM_TITLE);
        return seminar;
    }
    catch(error){
        throw error;
    }
}

const deleteSeminar = async (SM_TITLE) => {
    try{
        const seminar = seminarRepository.deleteSeminar(SM_TITLE);
        return seminar;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllSeminar,
    getAllSeminarByPrice,
    createSeminar,
    updateSeminar,
    deleteSeminar
}