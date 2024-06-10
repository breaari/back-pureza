const server = require('./src/app.js');
const { conn } = require('./src/DB_conection.js');


conn.sync({ force: false }).then(() => {
  server.listen(3000, () => {
    console.log('%s listening at 3000');
  });
});

