const userRepository = require('../repositories/userRepository');

const getAllUser = async () => {
    try {
        const user = await userRepository.getAllUser();
        return user;
    } catch (error) {
        return error;
    }
}

const getAllUserByName = async (u_name) => {
    try {
        const user = await userRepository.getAllUserByName(u_name);
        return user;
    } catch (error) {
        return error;
    } 
}

const createUser = async (data) => {
    try {
        const user = await userRepository.createUser(data);
        return user;
    } catch (error) {
        return error;
    } 
}

const updateUser = async (data, id) => {
    try{
        const user = userRepository.updateUser(data, id);
        return user;
    }
    catch(error){
        throw error;
    }
}

const deleteUser = async (id) => {
    try{
        const user = userRepository.deleteUser(id);
        return user;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllUser,
    getAllUserByName,
    createUser,
    updateUser,
    deleteUser
}