const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
    'user',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        // },
        // surname: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // email: {
        //     type: DataTypes.STRING,
        //     validate: {
        //         is: {
        //             args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //             msg: "Error: Wrong email format."
        //         }
        //     }
        // },
        // birth: {
        //     type: DataTypes.DATE,
        // },
        // phone: {
        //     type: DataTypes.INTEGER,
        // },
        // address: {
        //     type: DataTypes.STRING,
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // verified: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        // },
        // role: {
        //     type: DataTypes.ENUM('admin', 'user'),
        //     allowNull: false,
        // },
        // designer: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        // },
        // printer: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,

/*         createdAt: {
            type: DataTypes.STRING,
            defaultValue: function () {
                return new Date()
            }*/
        }, 
    },
    { timestamps: false }

)
    
module.exports = User