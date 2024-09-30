const express = require("express");

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop a re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to your library." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});