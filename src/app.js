const express = require("express");
const app = express();
const db = require("./utils/database")

const PORT = 6000;


db.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log(error);
    })


db.sync()
    .then(() => {
        console.log("Database Syncronized");
    })
    .catch((error) => {
        console.log(error);
    })

app.get("/", (req, res) => {
    res.send("Bienvenido a mi Ecommerce")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
})