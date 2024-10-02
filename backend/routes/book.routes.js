module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    router.post("/", books.create);

    router.get("/", books.findAll);

    router.get("/:id", books.findOne);

    router.put("/:id/update", books.update);

    router.put("/:id/readcheck", books.updateReadCheck);

    router.delete("/:id", books.delete);

    app.use("/api/books", router);
}