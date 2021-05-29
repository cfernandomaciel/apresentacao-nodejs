const db = require('./mongodb');
const collection = 'livros';

module.exports.findAll = async() => {
  const resultado = db.find(collection, {});
  return resultado;
};


module.exports.find = async(filtro) => {
  const resultado = db.find(collection, filtro);
  return resultado;
};


module.exports.save = async(objeto) => {
  const resultado = await db.insert(collection, objeto);
  return resultado;
};
