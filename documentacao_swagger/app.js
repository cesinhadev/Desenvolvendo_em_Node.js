const cors = require("cors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("./swagger.js");
const Routes = require('./routes.js');

const app = express();
app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));
Routes(app);



app.use(cors());


app.listen(8080, () => {
    console.log("Server listen...")
})