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
exports.updateBook = async (yargsObj) => {
    try {
        // no error but where is the data going?
        return await Book.update({book_title: yargsObj.newtitle}, {where: {book_title: yargsObj.title}})
    } catch (error) {
        console.log(error);
    }
};
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