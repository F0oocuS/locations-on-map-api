require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const locationRouter = require('./src/routes/location.route');
const entityRouter = require('./src/routes/entity.route');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.use('/api/locations', locationRouter);
app.use('/api/entities', entityRouter);

// Database connection and server startup
db.sequelize.authenticate()
	.then(() => {
		console.log('Database connected successfully');
		app.listen(3000, () => {
			console.log('Server running on port 3000');
		});
	})
	.catch(err => {
		console.error('Unable to connect to database:', err);
	});

