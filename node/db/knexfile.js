module.exports = {
    development: {
      client: 'mysql', 
      connection: {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
      },
      migrations: {
        directory: './migrations'
      }
    }
  };
  