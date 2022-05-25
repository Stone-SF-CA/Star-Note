const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static('client/dist'));
app.listen(3000);