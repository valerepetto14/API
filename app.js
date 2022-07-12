const express = require('express');
const app = express();
const cors = require('cors')
const router = require('./routes')

app.set('view engine','ejs');

//middles
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
app.use('/', router)


app.get('/', (req,res) => {
    res.render('index')
});

app.listen(3000, () =>{
    console.log("andandooo")
});
 
