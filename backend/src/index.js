const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();


app.use(cors);
app.use(express.json());

app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar Informação do Back-end
  * POST: Criar Informação no Back-end
  * PUT: Alterar Informação no Back-end
  * DELETE: Deletar uma informação no Back-end
  */
/**
 * Tipos de Parametros
 * Query Params: Parametros nomeados na rota após o simbolo de "?", filtros, paginação
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Driver: Select * from users u;
  * Query Builder: table('users').select('*').where('') 'KNEXJS'
  */


app.listen(3333);
