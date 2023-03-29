const express = require("express");
const db = require("./utils/database")
const morgan = require("morgan");
const cors = require("cors");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandlerRoute = require("./routes/errorHandler.routes");



const PORT = 4000;

initModels();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

db.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log(error);
    })


db.sync({alter:true})
    .then(() => {
        console.log("Database Syncronized");
    })
    .catch((error) => {
        console.log(error);
    })

app.get("/", (req, res) => {
    res.send("Bienvenido a mi Ecommerce")
})

app.use(userRoutes);
app.use(authRoutes);

errorHandlerRoute(app);

app.use((error ,req ,res, next)=>{
    res.status(400).json(error)
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
})