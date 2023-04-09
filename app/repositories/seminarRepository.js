const {seminar} = require('../models');



const getAllSeminar = () => {
    return seminar.findAll({
        attributes: ['SM_DATE', 'SM_TITLE', 'SM_PRICE', 'SM_VENUE']
    })
}

const getAllSeminarByPrice = (SM_PRICE) => {
    return seminar.findAll({
        where: {
            SM_PRICE: SM_PRICE
        } 
    })
}

const createSeminar = (data) => {
    return seminar.create(data)
}

const updateSeminar = (data, SM_TITLE) => {
    return seminar.update(data, {
        where: {
            SM_TITLE: SM_TITLE
        }
    })
}

const deleteSeminar = (SM_TITLE) => {
    return seminar.destroy({
        where: {
            SM_TITLE: SM_TITLE
        }
    })
}

module.exports = {
    getAllSeminar,
    getAllSeminarByPrice,
    createSeminar,
    updateSeminar,
    deleteSeminar
}