const express = require('express');
const hbs = require('hbs');
const index = require('./routers/index');
const app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 3000

app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'));
app.use(index);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.render('index.hbs')
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})