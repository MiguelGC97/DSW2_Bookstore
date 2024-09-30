const db = require("../models");
const Shop = db.shops;

exports.create = (req, res) => {

    /*if (!req.body.brand){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }*/

    /*const shop = {
        address: req.body.address,
        telephone: req.body.telephone
    };

    Shop.create(shop)
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the shop"
            });
        });*/
}

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
}

exports.findOne = (req, res) => {

}

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
}

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
}