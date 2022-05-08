const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Book = sequelize.define("Book", {
    // set columns
    book_title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // book_author: {
    //     type: DataTypes.STRING,
    //     defaultValue: "Not specified",
    // },
    // book_rating: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0
    // },
});

module.exports = Book;

