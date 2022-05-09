const yargs = require("yargs");
const { addAuthor, updateAuthor, deleteAuthor, listAuthors, resetAuthor, dropAuthor,  } = require("./author/authorMethod");
const { addBook, updateBook, deleteBook, listBooks,  resetBook, dropBook } = require("./book/bookMethod");

const { sequelize } = require("./db/connection");
// imports for CRUD operations

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        // // commands for book table
        if (yargsObj.addbook) {
            // --addbook --title="book title"
            await addBook({book_title: yargsObj.title});
            console.log(`${yargsObj.title} has been added.`);
        } else if (yargsObj.updatebook) {
            // --updatebook ? why wont this work?
            await updateBook({book_title: yargsObj.newtitle}, {where: {book_title: yargsObj.title}});
            console.log(`${yargsObj.title} has been updated.`);
        } else if (yargsObj.deletebook){
            // --deletebook --title="book title"
            await deleteBook({where:{book_title: yargsObj.title}});
            console.log(`${yargsObj.title} has been deleted`);




        } else if (yargsObj.listbooks) {
            // --listbooks ? can it search?
            console.log(await listBooks());




        } else if (yargsObj.dropbook) {
            // --dropbook this will drop the book table
            await dropBook();
            console.log(`table has been dropped.`);
        } else if (yargsObj.resetbook) {
            // --resetbook this will clear all records in the table
            await resetBook();
            console.log(`table has been reset 0 records.`);
        // // commands for book table
////////////////////////////////////////////////////////////////
        // // commands for author table
        } else if (yargsObj.addauthor) {
            // --addauthor
            await addAuthor({author_name: yargsObj.author});
            console.log(`${yargsObj.author} has been added.`);
        } else if (yargsObj.updateauthor) {
            // --updateauthor
            await updateAuthor({author_name: yargsObj.newauthor},{where:{author_name: yargsObj.author}});
            console.log(`${yargsObj.title} has been updated.`);
        } else if (yargsObj.deleteauthor){
            // --deleteauthor --author="author name"
            await deleteAuthor({where:{author_name: yargsObj.author}});
            console.log(`${yargsObj.title} has been deleted`);
        } else if (yargsObj.listauthors) {
            // --listauthors
            console.log(await listAuthors());
        } else if (yargsObj.dropauthor) {
            // --dropauthor
            await dropAuthor();
            console.log(`table has been dropped.`);
        } else if (yargsObj.resetauthor) {
            // --resetauthor clears the table
            await resetAuthor();
            console.log(`table has been reset 0 records.`);
        // //  commands for author table

        } else {
            console.log("Incorrect Command");
        }
    } catch (error) {
        console.log(error);
    }
}

































app(yargs.argv);