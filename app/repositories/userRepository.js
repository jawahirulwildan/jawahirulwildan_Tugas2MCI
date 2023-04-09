const {user} = require('../models');



const getAllUser = () => {
    return user.findAll({
        attributes: ['u_name', 'u_email', 'u_phone_number', 'u_domicile', 'u_information']
    })
}

const getAllUserByName = (u_name) => {
    return user.findOne({
        where: {
            u_name: u_name
        } 
    })
}

const createUser = (data) => {
    return user.create(data)
}

const updateUser = (data, id) => {
    return user.update(data, {
        where: {
            id: id
        }
    })
}

const deleteUser = (id) => {
    return user.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllUser,
    getAllUserByName,
    createUser,
    updateUser,
    deleteUser
}