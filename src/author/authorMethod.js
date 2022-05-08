const Author = require("./authorTable");
// --addauthor
exports.addAuthor = async (authorObj) => {
    try {
        await Author.create(authorObj);
    } catch (error) {
        console.log(error);
    }
};
// --listauthor
exports.listAuthors = async () => {
    try {
        return await Author.findAll();
    } catch (error) {
        console.log(error)
    }
};
// --updateauthor
exports.updateAuthor = async (authorObj) => {
    try {
        return await Author.update(authorObj)
    } catch (error) {
        console.log(error);
    }
}
// -- deleteauthor
exports.deleteAuthor = async (authorObj) => {
    try {
        return await Author.destroy(authorObj)

    } catch (error) {
        console.log(error);
    }
};
// --resetauthor
// clears table contents table / structure remains in db
exports.resetAuthor = async () => {
    try {
        return await Author.destroy({truncate: true})
    } catch (error) {
        console.log(error);
    }
};
// --dropauthor
// removes table from db if no foreign keys
exports.dropAuthor = async () => {
    try {
        return await Author.drop()
    } catch (error) {
        console.log(error);
    }
};

