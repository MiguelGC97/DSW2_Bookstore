module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
      
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      genre: {
        type: Sequelize.STRING,
        defaultValue: 'Other'
      },
      numPages: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      startDate: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      readCheck: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      finishDate: {
        type: Sequelize.DATEONLY
      }
    },{timestamps: false, // Para que no guarde fechas de creacion por defecto
      // Hook que se ejecuta antes de que el modelo actualice para guardar la fecha final
      hooks: {
        beforeUpdate: (book) => {
          if (book.readCheck === true && !book.finishDate) {
            book.finishDate = new Date(); // Asigna la fecha actual
          }
        }

      }
    });
  
    return Book;
  }