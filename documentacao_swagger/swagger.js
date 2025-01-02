const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition:{
        openapi:"3.0.0",
        info: {
            title:"Desenvolvimento em Node.js",
            version:"1.0.0",
            description:"Uma biblioteca simples em express"
        },
    },
    apis:["./routes.js"],
}

module.exports = swaggerJsdoc(options);