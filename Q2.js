const express = require('express');
const app = express();
const port = 4010;

let counter = 0;

app.get('/', (req, res) => {
	res.json({ counter: counter });
});

app.get('/increment', (req, res) => {
	let increment = counter++;
	res.json({ counter: increment });
});

app.get('/decrement', (req, res) => {
	let decrement = counter--;
	res.json({ counter: decrement });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
