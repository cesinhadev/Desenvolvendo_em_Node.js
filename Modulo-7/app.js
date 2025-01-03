const express = require("express");
const bodyParser = require("body-parser");
const middleware = require("./middleware");
const { generateToken } = require("./auth");


const app = express();
app.use(bodyParser.json());

app.get("/publico", (req, res) => {
    res.json({ mensagem: "Rota publica!" });
});

app.get("/privado", middleware, (req, res) => {
    res.json({mensagem: "Rota Privada!"});
});

app.post("/login", (req, res) => {
    const {userName, password} = req.body;
    if(userName === "usuario" && password === "senha"){
        const token = generateToken(userName);
        res.json(token)
    }else{
        res.status(401).json({ mensagem: "Usuario ou senha invalidos"});
    }
});

app.listen(8000);