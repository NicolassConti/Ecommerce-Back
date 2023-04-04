const db = require("../utils/database")
const initModels= require("../models/initModels")
const Product = require("../models/products.models")


initModels()

const products = [
    {
        name: "Iphone8",
        description:"es iphone8",
        price: "150",
        availableQty:"14",
        status: "disponible",
        userId: "1",
        productImage:"https://www.ign.com/articles/iphone-14-pro-review",
    },
    {
        name: "Iphone9",
        description:"es iphone9",
        price: "170",
        availableQty:"14",
        status: "disponible",
        userId: "1",
        productImage:"https://www.ign.com/articles/iphone-14-pro-review",
    },
    {
        name: "Iphone10",
        description:"es iphone10",
        price: "250",
        availableQty:"14",
        status: "disponible",
        userId: "1",
        productImage:"https://www.ign.com/articles/iphone-14-pro-review",
    },
    {
        name: "Iphone11",
        description:"es iphone11",
        price: "350",
        availableQty:"14",
        status: "disponible",
        userId: "1",
        productImage:"https://www.ign.com/articles/iphone-14-pro-review",
    },
]

db.sync({alter:true})
.then(async()=>{
    const result = await Product.bulkCreate(products)
    if(result) console.log("Productos creados exitosamente")
})