const express = require('express');
const bodyParser = require('body-parser');

const locationRouter = require('./src/routes/location.route');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.use('/api/locations', locationRouter);

app.listen(3000);

