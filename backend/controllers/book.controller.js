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
    /*Shop.findAll()
        .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving shops"
        });
    });*/
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {
    // Obtener el ID de los parámetros de la URL
    /*const id = req.params.id;

    // Verificar que el ID no sea undefined
    if (!id) {
        return res.status(400).send({
            message: "ID can not be empty!" // Respuesta si el ID está vacío
        });
    }

    Shop.update(req.body, { where: {id: id}})
    .then(() => {
        console.log("Entry updated");
        res.send({message: "Updated"});
    })*/
};

exports.delete = (req, res) => {
    /*const id = req.params.id;

    Shop.destroy({ where: { id: id}})
    .then(() => {
        console.log("Entry erased");
        res.send({message: "Erased"});
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while updating the shop"
        });
    });*/
};