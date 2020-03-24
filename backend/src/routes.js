const express = require('express');

const routes = express.Router();
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * Banco de dados SQL
 * Usando o banco de dados SQLite
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * usando a query builder: http://knexjs.org/
 */
routes.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Gabriel Jony'
  });
})

module.exports = routes;