const express = require('express');

const { listarAlunos, procurarAluno, cadastrarAluno, atualizarAluno, atualizarCurso, excluirAluno } = require('../controladores/alunos');
const { validarSenha } = require('../controladores/intermediario');
const rotas = express();

rotas.get('/alunos', listarAlunos);
rotas.get('/alunos/:id', procurarAluno);
rotas.post('/alunos', cadastrarAluno);
rotas.put('/alunos/:id', atualizarAluno);
rotas.patch('/alunos/:id', atualizarCurso);
rotas.delete('/alunos/:id', excluirAluno);
rotas.use(validarSenha);

module.exports = rotas;



