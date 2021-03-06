'use strict'
const Sequelize = require('sequelize');
const db = require('./src/DB/config');
const app = require('./app');
var port = process.env.PORT || 3000

db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync with { force: false }');
});
app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto:'${app.get('port')}'`);
})