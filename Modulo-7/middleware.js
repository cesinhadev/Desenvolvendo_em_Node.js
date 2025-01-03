const { readToken } = require("./auth");

async function middleware(req,res, next){
    const token = req.headers.authorization;


    if(!token){
        throw new Error("Usuario nao autorizado");
    }
    try{
        const user = await readToken(token);
        req.user = user;
        next();
    }
    catch{
        return res.status(404).json({ mensagem: "Token invalido"})
    }
    
}

module.exports = middleware;