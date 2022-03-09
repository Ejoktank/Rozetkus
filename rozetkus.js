const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname,'static')));
app.get('/', async (req,res) => { 
    res.sendFile(path.resolve(__dirname,'static','index.html'));
});

app.listen(5000, () => { console.log('Rozetkus online'); });
