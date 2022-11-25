import BlogModel from "../models/BlogModels.js";

//metodos CRUD

//mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear un registro
export const createBlog = async (req, res) => {
    try {
        BlogModel.create(req.body)
        res.json({
            "message": "registro creado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message })
    }
}

//actualizar un registro
export const updateBlog = async (req, res) =>{
    try {
        BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "registro actualizado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar un registro
export const deleteBlog = async (req, res) => {
    console.log('entre a delete')
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "registro eliminado exitosamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

BlogModel