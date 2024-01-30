const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contact.routes')

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/carnet-adresses');

// app.get('/',(req,res)=>{
//     res.send('ok')
// })

app.use('/contacts',contactRouter)

app.use((req,res) => {
    res.status(404).send('Page non trouvée')
})

// app.use((err,req,res,next) => {
//     console.log(err);
//     res.status(500).send('Erreur serveur')
// })

app.listen(3054,() =>{
    console.log(`Application lancée sur le port 3054`)
})