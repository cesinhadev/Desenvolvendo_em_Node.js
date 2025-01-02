const express = require ("express");
const multer  = require ("multer");
const path    = require ("path");
const cors    = require("cors");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(new Error('Tipo de arquivo invalido. Apenas imagens são permitidas'))
    }
}

const upload = multer({
    storage:storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5}
});

// criar pasta upload

const fs = require("fs");
const dir = './uploads';

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}




const app = express();
app.use(cors({ origin: '*' }));
app.use((err, req,res ,next) => {
    if(err instanceof multer.MulterError){
        return res.status(400).send("erro no upload: " + err.message);
    }else if (err){
        return res.status(400).send(err.message);
    }
    next();
})

// Criando a rota de upload de imagem

app.post('/upload', upload.single('arquivo'), (req, res) => {
    try{
        res.send('Arquivo enviado com sucesso');
    }catch(erro){
        res.send(500).send('Erro ao processar o upload');
    }
});



app.listen('3000', () =>{
    console.log("Servidor esta escutando ...")
})