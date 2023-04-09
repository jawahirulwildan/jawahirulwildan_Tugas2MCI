const userService = require('../services/userService');

const getAllUser = async (req, res) => {
    userService.getAllUser()
    .then(user => {
        if(!user) {
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : user
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

const getAllUserByName = async (req, res) => {
    const u_name = req.params.u_name;
    userService.getAllUserByName(u_name)
    .then(user => {
        if(!user) {
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : user
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

const createUser = async (req, res) => {
    userService.createUser(req.body)
    .then(user => {
        if(!user) {
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : user
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

const updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    userService.updateUser(data, id)
    .then(user => {
        if(!user){
            res.status(400).send({
                status: 'error',
                message: 'Failed update user',
                data: user
            });
        }
        res.status(200).send({
            status: 'success',
            message: 'Success update user',
            data: user
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

const deleteUser = (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id)
    .then(user => {
        if(!user){
            res.status(400).send({
                status: 'error',
                message: 'Failed delete user',
                data: user
            })
        }
        res.status(200).send({
            status: 'success',
            message: 'Success delete user',
            data: user
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
    getAllUser,
    getAllUserByName,
    createUser,
    updateUser,
    deleteUser
}