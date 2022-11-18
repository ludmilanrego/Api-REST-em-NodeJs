const express = require('express');

const { listarLivros, procurarLivro, cadastrarLivro, sustituirLivro, atualizarLivro, excluirLivro
} = require('./controladores/biblioteca');
const rotas = express();

rotas.get('/livros', listarLivros);
rotas.get('/livros/:id', procurarLivro);
rotas.post('/livros', cadastrarLivro);
rotas.put('/livros/:id', sustituirLivro);
rotas.patch('/livros/:id', atualizarLivro);
rotas.delete('/livros/:id', excluirLivro);


module.exports = rotas;