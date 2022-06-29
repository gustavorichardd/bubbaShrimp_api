const express = require('express');
const cors = require('cors')
const routes = require('./routes/routes')
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.PORT || 3333);

