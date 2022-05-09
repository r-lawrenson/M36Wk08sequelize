const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Book = sequelize.define("Book", {
    // set columns
    book_title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // book_year: {
    //     type: DataTypes.INTEGER(4),
    //     defaultValue: 0000,
    // },
    // book_rating: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0
    // },
});

module.exports = Book;

