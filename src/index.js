const express = require('express');
const cors = require('cors')
const routes = require('./routes/routes')


const app = express();

require("dotenv").config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(process.env.PORT || 3333);

