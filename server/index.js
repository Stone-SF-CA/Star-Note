const express = require("express");
const path = require("path");
const controller = require('./controller')

const app = express();
app.use(express.json());

app.get('/notebooks', controller.getNotebooks);
app.post('/notebooks', controller.postNotebook);
app.put('/notebooks', controller.putNotebook);
app.delete('/notebooks', controller.deleteNotebook);

app.get('/entries', controller.get);
app.post('/entries', controller.post);
app.put('/entries', controller.put);
app.delete('/entries', controller.delete);

app.use(express.static('client/dist'));
app.listen(3000);