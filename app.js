const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Route
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/book', require('./routes/book'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))