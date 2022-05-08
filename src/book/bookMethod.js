const Book = require("./bookTable");
// --addbook
exports.addBook = async (bookObj) => {
    try {
        await Book.create(bookObj);
    } catch (error) {
        console.log(error);
    }
};
// --listbooks
exports.listBooks = async () => {
    try {
        return await Book.findAll();
    } catch (error) {
        console.log(error)
    }
};
// --updatebook
exports.updateBook = async (bookObj) => {
    try {
        return await Book.update(bookObj)
    } catch (error) {
        console.log(error);
    }
}
// -- deletebook
exports.deleteBook = async (bookObj) => {
    try {
        return await Book.destroy(bookObj)

    } catch (error) {
        console.log(error);
    }
};
// --resetbook
// clears table contents table / structure remains in db
exports.resetBook = async () => {
    try {
        return await Book.destroy({truncate: true})
    } catch (error) {
        console.log(error);
    }
};
// --dropbook
// removes table from db if no foreign keys
exports.dropBook = async () => {
    try {
        return await Book.drop()
    } catch (error) {
        console.log(error);
    }
};