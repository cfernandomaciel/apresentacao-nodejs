const model = require('./../dto/livros');


module.exports.findAll = async(req, res) => {
  const resultado = await model.findAll();
  res.send(resultado);
};

module.exports.find = async(req, res) => {
  const { params } = req;
  const resultado = await model.find({ genero: params.genero });
  res.send(resultado);
};

module.exports.save = async(req, res) => {
  const { body } = req;
  const { titulo, autor, genero } = body;

  const livro = {
    livro,
    autor,
    genero
  };

  const resultado = await model.save(livro);
  res.send(resultado);
};