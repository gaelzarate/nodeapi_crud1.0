import express from "express";
import cors from 'cors'

import db from "./database/db.js"
//importamos el enrutador
import blogRoutes from './routes/routesBlogs.js'
import userRoutes from './routes/routesUser.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)
app.use('/users', userRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosaa la db')
} catch (error) {
    console.log('ele error es'+ error.message)
}

// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// })

app.listen(8000, ()=> {
    console.log("running on 8000")
})