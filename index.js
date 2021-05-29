const express     = require("express");
const app         = express();
const controller  = require('./controllers/livros.controller');

const port = 3000;

const formata = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

app.get("/", function(req, res) {
    res.send("Olá Mundo");
});


app.get('/livros', formata(controller.findAll));
app.get('/livros/:genero', formata(controller.find));

app.post('/livros', formata(controller.save));

console.log(`Servidor rodando na porta ${port}`);
app.listen(port);
