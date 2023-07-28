const express = require('express');

const app = express();

const port = 4030;

app.get('/random', (req, res) => {
	let random = Math.floor(Math.random() * 100);
	res.json({ random: random });
});

app.listen(port, () => {
	console.log('listening on port ' + port);
});
