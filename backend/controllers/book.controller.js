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

//Cambia el campo readCheck a true

exports.updateReadCheck = async (req, res) => { //async para hacer la función asíncrona y que no bloquee el código
    try{
        
        // Toma la ID de la url
        const id = req.params.id;

        // Actualiza el campo readCheck con la ID
        // Con await el código espera a que la db se actualice antes de seguir ejecutándose
        // En updated se guarda un valor que nos dice si se ha hecho algún cambio (1) o no (0)
        const [updated] = await Book.update( 
            { readCheck: true },
            { where: { id: id} }
        );

        // Comprobamos si se ha actualizado correctamente mirando la variable updated
        if (updated) {
            res.status(200).send({ message: "Book was marked as read" });
        } else {
            res.status(404).send({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
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