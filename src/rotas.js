const express = require('express');

const rotas = express();

rotas.post('/usuario');
rotas.post('/login');
rotas.get('/usuario');
rotas.put('/usuario');
rotas.get('/categoria');
rotas.get('/transacao');
rotas.get('/transacao/:id');
rotas.post('/transacao');
rotas.put('/transacao/:id');
rotas.delete('/transacao/:id');
rotas.get('/transacao/extrato');

module.exports = rotas;