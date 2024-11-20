const express = require('express')
const app = express()
const port = 3000
const environment = process.env.NODE_ENV || 'development';
const config = require('./db/knexfile')[environment];
const knex = require('knex')(config);

async function startApp() {
  try {
    console.log('Criando tabela');
    await knex.migrate.latest();
    const insertedId = await knex('people').insert({ name: 'Alair'});
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

startApp();

app.get('/', async (req, res) => {
    try {
        const results = await knex('people').select('id', 'name').where('name', 'Alair');
        res.send(`<h1>Full Cycle, Olá ${results[0].name}</h1>`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log('rodando porta ' + port)
})