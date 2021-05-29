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

};

module.exports.update = async(atributo) => {

};

module.exports.delete = async(id) => {

};