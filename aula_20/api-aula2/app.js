const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
	res.send('Deu certo');
});

app.listen(3000, ()=>{
	console.log('API em http://localhost:3000');
})
