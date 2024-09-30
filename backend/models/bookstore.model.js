module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
      
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATEONLY
      },
      readCheck: {
        type: Sequelize.BOOLEAN
      },
      finishDate: {
        type: Sequelize.DATEONLY
      },
    });
  
    return Book;
  }