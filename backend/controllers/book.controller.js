const db = require("../models");
const Book = db.books;

exports.create = (req, res) => {

    //Validacion del request
    if (!req.body.title || !req.body.author || !req.body.numPages) {
        return res.status(400).send({
            message: "Required fields can not be empty"
        });
    }

    //Creacion del objeto Book
    const book = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        numPages: req.body.numPages,
    };

    //Guardado en la base de datos
    Book.create(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the book"
            });
        });
};

exports.findAll = (req, res) => {
    Book.findAll()
        .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving books"
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Book.findByPk(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Book not found." });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the book."
            });
        });
};

exports.update = (req, res) => {
    // Obtener el ID de los parámetros de la URL
    const id = req.params.id;

    // Verificar que el ID no sea undefined
    if (!id) {
        return res.status(400).send({
            message: "Not a valid ID" // Respuesta si el ID está vacío
        });
    }

    Book.update(req.body, { where: {id: id}})
    .then(() => {
        console.log("Book updated");
        res.status(200).send({message: "Book updated"});
    })
};

//Cambia el campo readCheck a true
exports.updateReadCheck = async (req, res) => {
    try {
        // Toma la ID de la URL
        const id = req.params.id;

        // Primero, busca el libro en la base de datos
        const book = await Book.findByPk(id); // Busca el libro por ID

        // Verifica si el libro existe
        if (!book) {
            return res.status(404).send({ message: "Book not found." });
        }

        // Cambia el valor de readCheck a true
        book.readCheck = true;

        // Guarda los cambios en la db (esto activará el hook beforeUpdate del modelo)
        await book.save();

        res.status(200).send({ message: "Book was marked as read", book });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Book.destroy({ where: { id: id}})
    .then(() => {
        console.log("Book erased");
        res.send({message: "Book erased"});
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while deleting the book"
        });
    });
};