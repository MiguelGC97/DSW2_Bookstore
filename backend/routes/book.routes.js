module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    router.post("/", books.create);

    router.get("/", books.findAll);

    router.put("/", books.update);

    router.delete("/", books.delete);

    app.use("/api/home", router);
}