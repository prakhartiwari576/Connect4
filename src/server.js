const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000

app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('index.hbs')
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})