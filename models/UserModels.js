import db from "../database/db.js";

import { DataTypes } from "sequelize";

const UserModel = db.define('users', {
    username: {type: DataTypes.STRING },
    fullname: {type: DataTypes.STRING },
    password: {type: DataTypes.STRING },
    rol: {type: DataTypes.STRING }
})

export default UserModel