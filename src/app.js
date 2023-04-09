const express = require("express");
const db = require("./utils/database")
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require("./routes/order.routes");
const productInOrderRoutes = require("./routes/productInOrder.routes");
const productInCartRoutes = require("./routes/productInCart.routes");
const authRoutes = require("./routes/auth.routes");

const errorHandlerRoute = require("./routes/errorHandler.routes");




const PORT = process.env.PORT || 4000;

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
    res.send("Bienvenido a mi API de Ecommerce ==> https://ecommerce-api-8reh.onrender.com/api/v1/docs/")
})

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRoutes);
app.use(authRoutes);
app.use(productRoutes);
app.use(cartRoutes);
app.use(orderRoutes);
app.use(productInOrderRoutes);
app.use(productInCartRoutes);


errorHandlerRoute(app);

app.use((error ,req ,res, next)=>{
    res.status(400).json(error)
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`);
})