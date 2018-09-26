const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/dogs', (req,res)=>{
    res.send('[{"name": "Doly", "age": 4}, {"name": "Toffy", "age": 17}, {"name": "Lizzy", "age": 7}, {"name": "Nala", "age": 5}]')
})

app.listen(8000)