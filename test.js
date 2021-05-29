const model = require('./dto/livros');

const livros = [
  {
    autor: 'J. K. Rowling',
    titulo: 'Harry Potter',
    genero: 'magia',
    nota: 4
  },
  {
    autor: 'J. R. R. Tolkien',
    titulo: 'O Senhor dos Aneis',
    genero: 'magia',
    nota: 5
  },
  {
    autor: 'Stephen King',
    titulo: 'A Dança da Morte',
    genero: 'terror',
    nota: 3
  }
];


// const vetor = [129, 139, 155, 176];


// encontra o maior numero
// const resultado = Math.max(...vetor);

// encontra o menor numero
// const resultado = Math.min(...vetor);

// encontra o maior numero com reduce

// const resultado = [129, 139, 155, 187].reduce((a, b) => Math.max(a, b));
// const resultado = vetor.reduce((a, b) => Math.max(a, b));

// encontra a soma
// const resultado = vetor.reduce((acumulador, valorAtual) => acumulador + valorAtual);

// const resultado = vetor.reduce((soma, valorAtual) => { return soma + valorAtual; }, 0) / vetor.length;

// const resultado = livros.map(livro => livro.titulo);

// const resultado = livros.find(livro => livro.titulo === 'A Dança da Morte');
// const resultado = livros.find(livro => livro.titulo.match(/A dança.*/gim))

// const resultado = livros.filter(livro => livro.genero === 'magia');

// const resultado = livros.filter(livro => livro.genero === 'magia').map(livro => livro.titulo);

//encontra a media das notas dos livros
// const resultado = livros.reduce((soma, valAtual) => soma + valAtual.nota, 0) / livros.length;

// console.log(resultado); 