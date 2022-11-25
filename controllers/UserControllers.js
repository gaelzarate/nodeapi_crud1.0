import UserModel from "../models/UserModels.js"

//metodos CRUD

//mostrar todos los registros
export const getAllUsers = async (req, res) => {
    console.log('entroi al getallUsers')
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        console.log('entroal error')
        res.json({message: error.message})
    }
}

//mostrar un registro
export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear un registro
export const createUser = async (req, res) => {
    try {
        UserModel.create(req.body)
        res.json({
            "message": "user creado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}

//actualizar un registro
export const updateUser = async (req, res) =>{
    try {
        UserModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "usuario actualizado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar un registro
export const deleteUser = async (req, res) => {
    console.log('entre a delete')
    try {
        await UserModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "registro eliminado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

UserModel