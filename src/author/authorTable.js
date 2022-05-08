const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Author = sequelize.define("Author", {
    // set columns
    author_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

module.exports = Author;